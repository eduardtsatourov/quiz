var quiz = [
  {
    Question:
      "Question: What is the difference between the INITIALIZATION and AT SELECTION-SCREEN OUTPUT events? Please choose the correct answer ",
    Response: [
      " INITIALIZATION cannot change pushbutton texts",
      " AT SELECTION-SCREEN OUTPUT can change pushbutton texts",
      " INITIALIZATION can overwrite the default value of a PARAMETERS field",
      " AT SELECTIION-SCREEN OUTPUT can overwrite the default values of a PARAMETERS field",
      " INITIALIZATION is only processed once.",
      " AT SELECT-SCREEN OUTPUT can be processed multiple times",
      " INITIALIZATION can change the properties of the screen fields",
      " AT SELECTION-SCREEN OUTPUT cannot change the properties of the screen field"
    ],
    correct: [4, 5]
  },
  {
    Question:
      "Question: Value help can be supplied from which of the following? Please select all the correct answers that apply. ",
    Response: [
      " Search help for a check table",
      " Search help for table or structure fields",
      " Search help for a screen field",
      " Search help for a data element",
      " Key values of a check table",
      " Search help from a text table",
      " Process On Value request",
      " Fixed values"
    ],
    correct: [0, 1, 2, 3, 4, 5, 6, 7]
  },
  {
    Question:
      "Question: What ABAP statements can you use to create an instance of the class CL_GUI_CUSTOM_CONTAINER in an ABAP program? Please choose the correct answer. ",
    Response: [
      " DATA: go_container TYPE REF TO CL_GUI_CUSTOM_CONTAINER.",
      " CREATE OBJECT go_container�..",
      " DATA: go_container TYPE REF TO CL_GUI_CUSTOM_CONTAINER.",
      " CREATE DATA go_container�",
      " DATA: go_container TYPE CL_GUI_CUSTOM_CONTAINER.",
      " CREATE DATA go_container�",
      " DATA: go_container TYPE CL_GUI_CUSTOM_CONTAINER.",
      " CREATE OBJECT go_container�."
    ],
    correct: [0, 1]
  },
  {
    Question:
      "Question: What is unique about a singleton? There are 2 correct answers to this question. ",
    Response: [
      " It must be instantiated using a static public constructor.",
      " It must be instantiated using a private instance constructor.",
      " It must be instantiated using a public instance constructor.",
      " It must be defined as FINAL.",
      " It cannot be defined as FINAL.",
      " It must be instantiated using a static protected constructor.",
      " It must be instantiated using a protected instance constructor.",
      " must be instantiated using a static private constructor."
    ],
    correct: [3, 7]
  },
  {
    Question:
      "Question: What is a plug? There are 4 correct answers to this question. ",
    Response: [
      " Forms the basis of navigation within a Web Dynpro",
      " Can be assigned to multiple views",
      " Can be defined as inbound and be controlled by multiple outbound plugs",
      " Can be defined as inbound, outbound, or both",
      " Can be defined as default inbound",
      " Can be defined as an exit",
      " Can be defined as a startup",
      " Can be defined as outbound controlling multiple inbound plugs"
    ],
    correct: [0, 2, 5, 6]
  },
  {
    Question:
      "Question: You have located a new (kernel) Business Add-in(BAdI) in an SAP standard application? What must you create to implement the BAdI, and in which order? Please choose the correct answer. Note: Answers of this question are not verified by our experts, please study yourself and select the appropriate answers. ",
    Response: [
      " Enhancement Spot Implementation",
      " BAdI Implementation",
      " Enhancement Project",
      " BAdI Implementation",
      " BAdI Implementation",
      " Enhancement Spot Implementation",
      " BadI Implementation",
      " Enhancement Project"
    ],
    correct: [0, 1]
  }
];

export default quiz;
