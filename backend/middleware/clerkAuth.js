const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

// Development middleware to bypass auth for testing (remove in production)
const bypassAuthForDev = (req, res, next) => {
  // For development only - add a fake user ID
  if (
    !process.env.CLERK_SECRET_KEY ||
    process.env.CLERK_SECRET_KEY === "sk_test_your_clerk_secret_key_here"
  ) {
    console.log("Using development auth bypass");
    req.auth = { userId: "dev-user-123" };
    req.clerkUserId = "dev-user-123";
    next();
  } else {
    // Use real Clerk auth in production
    const clerkAuth = ClerkExpressWithAuth({
      secretKey: process.env.CLERK_SECRET_KEY,
    });
    clerkAuth(req, res, (err) => {
      if (err) {
        console.error("Clerk auth error:", err);
        return res.status(401).json({
          success: false,
          message: "Authentication failed",
        });
      }
      addUserToRequest(req, res, next);
    });
  }
};

// Middleware to validate Clerk user authentication
const validateClerkUser = bypassAuthForDev;

// Additional middleware to add user ID to request
const addUserToRequest = (req, res, next) => {
  try {
    if (req.auth && req.auth.userId) {
      req.clerkUserId = req.auth.userId;
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Invalid or missing authentication",
      });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Authentication service error",
    });
  }
};

module.exports = {
  validateClerkUser,
  addUserToRequest,
};
