const quizData = [
  // PEOPLE DOMAIN (42 Questions)
  {
    question: "Q1: A team member is not meeting deadlines consistently. What is the best approach?",
    options: { a: "Reassign tasks to someone else", b: "Discuss privately and coach them", c: "Warn them in front of the team", d: "Ignore the issue" },
    correct: "b",
    explanation: "Private coaching helps address performance issues constructively."
  },
  {
    question: "Q2: During a conflict between two team members, the PM should:",
    options: { a: "Let them resolve it themselves", b: "Facilitate discussion to reach consensus", c: "Decide for them without discussion", d: "Escalate immediately to sponsor" },
    correct: "b",
    explanation: "Facilitating discussion helps resolve conflicts collaboratively."
  },
  {
    question: "Q3: A team member is disengaged. The PM should:",
    options: { a: "Assign more work", b: "Understand the cause and motivate", c: "Ignore them", d: "Give them a warning" },
    correct: "b",
    explanation: "Understanding and motivating aligns with People domain principles."
  },
  {
    question: "Q4: How should a PM handle a team member who resists Agile practices?",
    options: { a: "Force them to comply", b: "Coach and provide training", c: "Exclude them from project", d: "Ignore resistance" },
    correct: "b",
    explanation: "Coaching and training facilitates change and adoption."
  },
  {
    question: "Q5: A team member repeatedly makes errors. The PM should:",
    options: { a: "Reassign them", b: "Provide feedback and guidance", c: "Ignore errors", d: "Escalate immediately" },
    correct: "b",
    explanation: "Feedback and guidance help improve performance and morale."
  },
  {
    question: "Q6: The PM notices low morale after a major project change. Best action?",
    options: { a: "Ignore the morale", b: "Communicate clearly and support team", c: "Assign extra tasks", d: "Reduce scope abruptly" },
    correct: "b",
    explanation: "Clear communication and support help maintain engagement and productivity."
  },
  {
    question: "Q7: Team member is underperforming due to lack of skill. PM should:",
    options: { a: "Replace immediately", b: "Provide mentoring and training", c: "Ignore the situation", d: "Blame the team member publicly" },
    correct: "b",
    explanation: "Mentoring and training addresses skills gap responsibly."
  },
  {
    question: "Q8: How should the PM handle conflicts in a self-organizing team?",
    options: { a: "Take full control", b: "Encourage team discussion and collaboration", c: "Ignore conflicts", d: "Escalate all issues" },
    correct: "b",
    explanation: "Self-organizing teams require facilitation rather than direct control."
  },
  {
    question: "Q9: A key stakeholder is unhappy with team behavior. PM should:",
    options: { a: "Ignore stakeholder", b: "Address concerns and coach team", c: "Remove team member", d: "Escalate issue to sponsor" },
    correct: "b",
    explanation: "Addressing concerns constructively aligns with People domain practices."
  },
  {
    question: "Q10: Team member is consistently late for daily standups. PM should:",
    options: { a: "Ignore it", b: "Discuss privately and set expectations", c: "Remove from team", d: "Warn publicly" },
    correct: "b",
    explanation: "Private discussion and setting expectations improves team accountability."
  },
  {
    question: "Q43: During project planning, which document outlines high-level deliverables and objectives?",
    options: { a: "Project charter", b: "Risk register", c: "Stakeholder register", d: "Project management plan" },
    correct: "a",
    explanation: "The Project Charter authorizes the project and defines objectives and deliverables."
  },
  {
    question: "Q44: What is the expected monetary value (EMV) of a risk with 30% probability and $100,000 impact?",
    options: { a: "$30,000", b: "$70,000", c: "$100,000", d: "$10,000" },
    correct: "a",
    explanation: "EMV = Probability x Impact = 0.3 x 100,000 = 30,000"
  },
  {
    question: "Q45: Which process group focuses on coordinating people and resources to execute the project plan?",
    options: { a: "Planning", b: "Executing", c: "Monitoring & Controlling", d: "Initiating" },
    correct: "b",
    explanation: "Executing process group involves coordinating resources to perform the project work."
  },
  {
    question: "Q46: A change request is submitted during execution. PM should first:",
    options: { a: "Implement immediately", b: "Assess impact on scope, schedule, and cost", c: "Ignore it", d: "Escalate to sponsor directly" },
    correct: "b",
    explanation: "Assessing impact ensures informed decision-making and alignment with project objectives."
  },
  {
    question: "Q47: What is the primary output of the risk identification process?",
    options: { a: "Risk register", b: "Risk response plan", c: "Issue log", d: "Project charter" },
    correct: "a",
    explanation: "The risk register captures all identified risks and their characteristics."
  },
  {
    question: "Q48: During procurement, the seller fails to meet contract terms. PM should:",
    options: { a: "Ignore the violation", b: "Follow contract management procedures", c: "Terminate the project", d: "Pay extra" },
    correct: "b",
    explanation: "Contract management procedures ensure compliance and proper issue resolution."
  },
  {
    question: "Q49: Which technique is used for estimating activity durations using three estimates (optimistic, most likely, pessimistic)?",
    options: { a: "Analogous estimating", b: "Parametric estimating", c: "PERT analysis", d: "Bottom-up estimating" },
    correct: "c",
    explanation: "PERT uses three-point estimates to calculate expected duration."
  },
  {
    question: "Q50: Which document authorizes a project and gives the PM authority?",
    options: { a: "Project charter", b: "Project management plan", c: "Scope statement", d: "Stakeholder register" },
    correct: "a",
    explanation: "The project charter formally authorizes the project and assigns the PM."
  },
  {
    question: "Q51: Earned Value Management (EVM) helps PM track:",
    options: { a: "Team satisfaction", b: "Project cost and schedule performance", c: "Procurement status", d: "Stakeholder engagement" },
    correct: "b",
    explanation: "EVM integrates scope, schedule, and cost to monitor project performance."
  },
  {
    question: "Q52: During executing, scope creep is observed. PM should:",
    options: { a: "Approve changes immediately", b: "Follow change control process", c: "Ignore it", d: "Cancel project" },
    correct: "b",
    explanation: "Change control process ensures scope changes are evaluated and approved formally."
  },
 {
    question: "Q53: Which process ensures that project deliverables meet quality standards?",
    options: { a: "Quality planning", b: "Quality assurance", c: "Quality control", d: "Risk management" },
    correct: "c",
    explanation: "Quality control involves monitoring specific project results to ensure they meet quality standards."
  },
  {
    question: "Q54: A project’s critical path determines:",
    options: { a: "Shortest project duration", b: "Longest sequence of dependent tasks", c: "Team workload", d: "Budget allocation" },
    correct: "b",
    explanation: "Critical path is the longest sequence of dependent activities; it dictates the minimum project duration."
  },
  {
    question: "Q55: What is the purpose of a work breakdown structure (WBS)?",
    options: { a: "Assign team roles", b: "Break deliverables into manageable components", c: "Track project cost", d: "Monitor quality" },
    correct: "b",
    explanation: "WBS decomposes project deliverables into smaller, manageable work packages."
  },
  {
    question: "Q56: During risk analysis, which technique uses probability and impact matrices?",
    options: { a: "Qualitative risk analysis", b: "Quantitative risk analysis", c: "Monte Carlo simulation", d: "Sensitivity analysis" },
    correct: "a",
    explanation: "Qualitative risk analysis prioritizes risks based on probability and impact."
  },
  {
    question: "Q57: A key milestone is delayed. PM should first:",
    options: { a: "Update the schedule immediately", b: "Analyze impact on project objectives", c: "Escalate to sponsor", d: "Ignore the delay" },
    correct: "b",
    explanation: "Impact analysis helps determine the effect of the delay and decide corrective actions."
  },
  {
    question: "Q58: In Agile projects, the product backlog is primarily managed by:",
    options: { a: "Project manager", b: "Scrum master", c: "Product owner", d: "Team lead" },
    correct: "c",
    explanation: "Product owner is responsible for maintaining and prioritizing the backlog."
  },
  {
    question: "Q59: A risk response plan includes:",
    options: { a: "Stakeholder register", b: "Actions to reduce threats or exploit opportunities", c: "WBS", d: "Project charter" },
    correct: "b",
    explanation: "Risk response planning defines actions to address risks, either threats or opportunities."
  },
  {
    question: "Q60: Which estimating technique uses historical data from similar projects?",
    options: { a: "Bottom-up estimating", b: "Analogous estimating", c: "Parametric estimating", d: "Three-point estimating" },
    correct: "b",
    explanation: "Analogous estimating relies on past project data for quick estimates."
  },
  {
    question: "Q61: PM notices multiple change requests in a short period. First step:",
    options: { a: "Reject all", b: "Analyze impact and follow change control", c: "Approve all", d: "Ignore" },
    correct: "b",
    explanation: "Change control ensures decisions are informed and aligned with project objectives."
  },
  {
    question: "Q62: Which tool helps monitor project schedule performance?",
    options: { a: "RACI matrix", b: "Gantt chart", c: "Stakeholder register", d: "Issue log" },
    correct: "b",
    explanation: "Gantt charts visualize tasks against time, helping track schedule performance."
  },
  {
    question: "Q63: Earned value formula for schedule variance (SV) is:",
    options: { a: "EV - AC", b: "EV - PV", c: "AC - EV", d: "PV - EV" },
    correct: "b",
    explanation: "Schedule Variance = EV (Earned Value) - PV (Planned Value)."
  },
  {
    question: "Q64: A risk occurs with high impact but low probability. PM should:",
    options: { a: "Ignore risk", b: "Develop contingency plan", c: "Cancel project", d: "Assign to sponsor" },
    correct: "b",
    explanation: "Contingency planning addresses low-probability, high-impact risks proactively."
  },
  {
    question: "Q65: Which document authorizes a formal change?",
    options: { a: "Change request form", b: "Project charter", c: "Issue log", d: "Stakeholder register" },
    correct: "a",
    explanation: "A change request formally proposes modifications and triggers change control processes."
  },
  {
    question: "Q66: PM notices a deviation in cost performance index (CPI < 1). Action?",
    options: { a: "Stop project", b: "Analyze cost variance and take corrective action", c: "Ignore", d: "Increase budget arbitrarily" },
    correct: "b",
    explanation: "CPI < 1 indicates over-budget; corrective actions are required."
  },
  {
    question: "Q67: During integration management, PM combines various outputs to:",
    options: { a: "Create work packages", b: "Deliver a cohesive project outcome", c: "Develop project charter", d: "Assign team members" },
    correct: "b",
    explanation: "Integration ensures all project components work together effectively."
  },
  {
    question: "Q68: Which process monitors overall project progress and performance?",
    options: { a: "Executing", b: "Monitoring & Controlling", c: "Planning", d: "Initiating" },
    correct: "b",
    explanation: "Monitoring & Controlling tracks project performance and identifies changes."
  },
  {
    question: "Q69: A project manager needs to fast-track schedule. Which approach is appropriate?",
    options: { a: "Do tasks sequentially", b: "Overlap tasks where possible", c: "Add resources arbitrarily", d: "Ignore constraints" },
    correct: "b",
    explanation: "Fast-tracking overlaps tasks to shorten project duration without adding resources."
  },
  {
    question: "Q70: Cost baseline includes:",
    options: { a: "Planned value over time", b: "Stakeholder communication plan", c: "Issue log", d: "Scope statement" },
    correct: "a",
    explanation: "Cost baseline is the approved budget distributed over the project schedule."
  },
  {
    question: "Q71: Which tool identifies cause-effect relationships for quality problems?",
    options: { a: "Histogram", b: "Fishbone (Ishikawa) diagram", c: "Pareto chart", d: "Gantt chart" },
    correct: "b",
    explanation: "Fishbone diagram helps identify root causes of quality issues."
  },
  {
    question: "Q72: PM needs to ensure project adheres to organizational policies. Best action?",
    options: { a: "Ignore policies", b: "Integrate policies into project management plan", c: "Escalate only major violations", d: "Rely on team judgment" },
    correct: "b",
    explanation: "Integration ensures compliance and consistency with organizational standards."
  },
{
    question: "Q73: Which process ensures deliverables are completed and accepted by the customer?",
    options: { a: "Scope validation", b: "Scope control", c: "Quality control", d: "Integration management" },
    correct: "a",
    explanation: "Scope validation verifies that deliverables meet the requirements and are formally accepted."
  },
  {
    question: "Q74: Monte Carlo simulation is used for:",
    options: { a: "Qualitative risk analysis", b: "Quantitative risk analysis", c: "Cost budgeting", d: "Team management" },
    correct: "b",
    explanation: "Monte Carlo simulation uses probability distributions to analyze project risk impact quantitatively."
  },
  {
    question: "Q75: PM wants to reduce cost by finding cheaper resources. Which process?",
    options: { a: "Procurement management", b: "Cost control", c: "Scope management", d: "Integration management" },
    correct: "a",
    explanation: "Procurement management involves acquiring resources or services to meet project needs efficiently."
  },
  {
    question: "Q76: A schedule performance index (SPI) < 1 indicates:",
    options: { a: "Project ahead of schedule", b: "Project behind schedule", c: "Project on budget", d: "No significance" },
    correct: "b",
    explanation: "SPI < 1 means earned value is less than planned value, indicating schedule lag."
  },
  {
    question: "Q77: A risk occurs unexpectedly causing cost overrun. Best PM action?",
    options: { a: "Ignore", b: "Activate contingency reserve and corrective actions", c: "Cancel project", d: "Escalate only" },
    correct: "b",
    explanation: "Contingency reserves address known-unknowns; corrective actions mitigate impacts."
  },
  {
    question: "Q78: Work performance reports provide:",
    options: { a: "Detailed task instructions", b: "Project performance data and analysis", c: "Team member feedback", d: "Change request forms" },
    correct: "b",
    explanation: "Work performance reports summarize status, progress, and performance for stakeholders."
  },
  {
    question: "Q79: Parametric estimating uses:",
    options: { a: "Expert judgment", b: "Historical data and mathematical models", c: "Three-point estimates", d: "Analogous projects" },
    correct: "b",
    explanation: "Parametric estimation applies formulas or rates to derive cost or duration."
  },
  {
    question: "Q80: PM notices team is underperforming. Best first step?",
    options: { a: "Replace team", b: "Identify root cause and address", c: "Escalate to sponsor", d: "Ignore issue" },
    correct: "b",
    explanation: "Analyzing causes helps apply corrective actions effectively."
  },
  {
    question: "Q81: Change control board (CCB) is responsible for:",
    options: { a: "Approving or rejecting changes", b: "Assigning tasks", c: "Risk monitoring", d: "Creating WBS" },
    correct: "a",
    explanation: "CCB reviews, approves, or rejects proposed changes in a formal process."
  },
  {
    question: "Q82: A project experiences frequent scope creep. PM should:",
    options: { a: "Ignore it", b: "Reinforce change control and requirements management", c: "Approve all changes", d: "Remove team member" },
    correct: "b",
    explanation: "Strong change control prevents unauthorized scope changes."
  },
  {
    question: "Q83: Which chart shows cumulative work completed over time?",
    options: { a: "Gantt chart", b: "Burndown chart", c: "Pareto chart", d: "Fishbone diagram" },
    correct: "b",
    explanation: "Burndown charts track work remaining vs. time in Agile projects."
  },
  {
    question: "Q84: When planning, what helps ensure all work is included?",
    options: { a: "Project charter", b: "WBS", c: "Schedule network diagram", d: "Risk register" },
    correct: "b",
    explanation: "WBS decomposes all deliverables into manageable tasks to avoid omissions."
  },
  {
    question: "Q85: Which process monitors project risks and triggers responses?",
    options: { a: "Risk identification", b: "Risk monitoring and control", c: "Risk avoidance", d: "Integration management" },
    correct: "b",
    explanation: "Monitoring & controlling ensures risks are tracked and responses are implemented as needed."
  },
  {
    question: "Q86: Bottom-up estimating involves:",
    options: { a: "Using expert judgment", b: "Estimating each work package individually and summing", c: "Comparing with historical projects", d: "Using parametric models" },
    correct: "b",
    explanation: "Bottom-up estimation calculates total project estimates by summing estimates for smaller components."
  },
  {
    question: "Q87: PM notices variance in quality metrics. First step:",
    options: { a: "Ignore it", b: "Perform quality control and corrective action", c: "Escalate to sponsor", d: "Reduce scope" },
    correct: "b",
    explanation: "Corrective actions address quality deviations and improve outcomes."
  },
  {
    question: "Q88: Fast-tracking a project may increase:",
    options: { a: "Cost only", b: "Risk", c: "Scope", d: "Stakeholder satisfaction" },
    correct: "b",
    explanation: "Overlapping tasks can accelerate schedule but may increase risk due to dependencies."
  },
  {
    question: "Q89: What is the purpose of integrated change control?",
    options: { a: "Document changes only", b: "Evaluate and manage all project changes", c: "Control team performance", d: "Manage procurement" },
    correct: "b",
    explanation: "Integrated change control ensures changes are assessed, approved, and communicated consistently."
  },
  {
    question: "Q90: PM needs to forecast final project cost based on current performance. Which technique?",
    options: { a: "Earned value analysis", b: "Parametric estimating", c: "Analogous estimating", d: "WBS" },
    correct: "a",
    explanation: "Earned Value Management allows forecasting based on current schedule and cost performance."
  },
  {
    question: "Q91: PM wants to visualize resource allocation over time. Tool?",
    options: { a: "RACI chart", b: "Resource histogram", c: "Gantt chart", d: "WBS" },
    correct: "b",
    explanation: "Resource histograms display team allocation across the project timeline."
  },
  {
    question: "Q92: Lessons learned are documented in:",
    options: { a: "Project charter", b: "Project management plan", c: "Lessons learned register", d: "Issue log" },
    correct: "c",
    explanation: "Lessons learned capture successes and failures to improve future projects."
  }
];

// Function to display quiz questions, options, and handle answers
function loadQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  quizData.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('question-block');
    div.innerHTML = `
      <p><strong>${q.question}</strong></p>
      <ul>
        <li><input type="radio" name="q${index}" value="a"> ${q.options.a}</li>
        <li><input type="radio" name="q${index}" value="b"> ${q.options.b}</li>
        <li><input type="radio" name="q${index}" value="c"> ${q.options.c}</li>
        <li><input type="radio" name="q${index}" value="d"> ${q.options.d}</li>
      </ul>
      <p class="explanation" style="display:none;">Answer: ${q.correct.toUpperCase()} - ${q.explanation}</p>
    `;
    quizContainer.appendChild(div);
  });
}

function submitQuiz() {
  quizData.forEach((q, index) => {
    // Show the explanation
    const explanation = document.getElementsByClassName('explanation')[index];
    explanation.style.display = 'block';

    // Check the selected answer
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected) {
      if (selected.value === q.correct) {
        selected.parentElement.style.color = 'green'; // correct answer
      } else {
        selected.parentElement.style.color = 'red'; // wrong answer
      }
    }
  });
}
