const mongoose = require("mongoose");

const diagramSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      index: true,
    },
    title: {
      type: String,
      default: "Untitled Diagram",
    },
    nodes: [
      {
        id: String,
        type: String,
        position: {
          x: Number,
          y: Number,
        },
        data: mongoose.Schema.Types.Mixed,
      },
    ],

    edges: [
      {
        id: String,
        source: String,
        target: String,
        type: String,
        animated: Boolean,
      },
    ],

    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Diagram", diagramSchema);
