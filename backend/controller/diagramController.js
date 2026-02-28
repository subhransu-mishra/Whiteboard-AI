const diagramSchema = require("../schema/diagram.js");

// Show all the diagrams of a user
exports.getDiagrams = async (req, res) => {
  try {
    const diagrams = await diagramSchema
      .find({
        clerkUserId: req.clerkUserId,
      })
      .sort({ lastModified: -1 });

    res.json({
      success: true,
      data: diagrams,
      count: diagrams.length,
    });
  } catch (error) {
    console.error("Get diagrams error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch diagrams",
      error: error.message,
    });
  }
};

exports.getSingleDiagram = async (req, res) => {
  try {
    const diagram = await diagramSchema.findOne({
      _id: req.params.id,
      clerkUserId: req.clerkUserId,
    });

    if (!diagram) {
      return res.status(404).json({
        success: false,
        message: "Diagram not found or you don't have access to it",
      });
    }

    res.json({
      success: true,
      data: diagram,
    });
  } catch (error) {
    console.error("Get single diagram error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch diagram",
      error: error.message,
    });
  }
};

//Create a new diagram
exports.createDiagram = async (req, res) => {
  try {
    const { title, nodes, edges } = req.body;

    // Validate required fields
    if (!title || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const newDiagram = new diagramSchema({
      clerkUserId: req.clerkUserId,
      title: title.trim(),
      nodes: nodes || [],
      edges: edges || [],
    });

    const savedDiagram = await newDiagram.save();

    res.status(201).json({
      success: true,
      data: savedDiagram,
      message: "Diagram created successfully",
    });
  } catch (error) {
    console.error("Create diagram error:", error);
    res.status(400).json({
      success: false,
      message: "Failed to create diagram",
      error: error.message,
    });
  }
};

//Save/Update the diagram
exports.saveDiagram = async (req, res) => {
  try {
    const { title, nodes, edges } = req.body;

    // Validate the diagram belongs to the user
    const existingDiagram = await diagramSchema.findOne({
      _id: req.params.id,
      clerkUserId: req.clerkUserId,
    });

    if (!existingDiagram) {
      return res.status(404).json({
        success: false,
        message: "Diagram not found or you don't have access to it",
      });
    }

    // Update only the provided fields
    const updateData = { lastModified: new Date() };
    if (title !== undefined) updateData.title = title.trim();
    if (nodes !== undefined) updateData.nodes = nodes;
    if (edges !== undefined) updateData.edges = edges;

    const updatedDiagram = await diagramSchema.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true },
    );

    res.json({
      success: true,
      data: updatedDiagram,
      message: "Diagram updated successfully",
    });
  } catch (error) {
    console.error("Save diagram error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update diagram",
      error: error.message,
    });
  }
};

//Delete the diagram
exports.deleteDiagram = async (req, res) => {
  try {
    // Ensure only the owner can delete their diagram
    const deletedDiagram = await diagramSchema.findOneAndDelete({
      _id: req.params.id,
      clerkUserId: req.clerkUserId,
    });

    if (!deletedDiagram) {
      return res.status(404).json({
        success: false,
        message: "Diagram not found or you don't have access to it",
      });
    }

    res.json({
      success: true,
      message: "Diagram deleted successfully",
      data: { id: deletedDiagram._id },
    });
  } catch (error) {
    console.error("Delete diagram error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete diagram",
      error: error.message,
    });
  }
};
