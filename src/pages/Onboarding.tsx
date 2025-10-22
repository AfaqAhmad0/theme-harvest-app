import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Step 1: Department and Goal Selection
const StepOne = ({ onNext }: { onNext: (data: { departments: string[], goal: string }) => void }) => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const departments = [
    { id: "marketing", name: "Marketing", icon: "📊" },
    { id: "it", name: "IT", icon: "💻" },
    { id: "sales", name: "Sales", icon: "💼" },
    { id: "hr", name: "HR", icon: "👥" },
    { id: "operations", name: "Operations", icon: "⚙️" },
    { id: "finance", name: "Finance", icon: "💰" },
  ];

  const getGoalsForDepartments = () => {
    if (selectedDepartments.includes("marketing")) {
      return ["Generate leads", "Manage campaigns", "Track analytics", "Social media automation"];
    }
    if (selectedDepartments.includes("it")) {
      return ["Manage devices", "User onboarding/offboarding", "System monitoring", "Security compliance"];
    }
    if (selectedDepartments.includes("sales")) {
      return ["Lead tracking", "CRM automation", "Pipeline management", "Follow-up automation"];
    }
    if (selectedDepartments.includes("hr")) {
      return ["Employee onboarding", "Leave management", "Performance tracking", "Recruitment automation"];
    }
    return ["Automate workflows", "Improve productivity", "Reduce costs", "Streamline operations"];
  };

  const toggleDepartment = (deptId: string) => {
    setSelectedDepartments(prev =>
      prev.includes(deptId) ? prev.filter(d => d !== deptId) : [...prev, deptId]
    );
    setSelectedGoal(""); // Reset goal when departments change
  };

  const goals = getGoalsForDepartments();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Welcome! Let's get you set up</h2>
        <p className="text-muted-foreground">Tell us about your team so we can personalize your experience</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-3 block">Which departments will use MyTechPassport?</label>
          <div className="grid grid-cols-2 gap-3">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => toggleDepartment(dept.id)}
                className={`flex items-center gap-2 p-4 rounded-lg border-2 transition-all ${
                  selectedDepartments.includes(dept.id)
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <span className="text-2xl">{dept.icon}</span>
                <span className="font-medium">{dept.name}</span>
                {selectedDepartments.includes(dept.id) && (
                  <CheckCircle2 className="ml-auto h-5 w-5 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {selectedDepartments.length > 0 && (
          <div>
            <label className="text-sm font-medium mb-3 block">What's your primary goal?</label>
            <div className="space-y-2">
              {goals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => setSelectedGoal(goal)}
                  className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                    selectedGoal === goal
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <span className="font-medium">{goal}</span>
                  {selectedGoal === goal && (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <Button
        onClick={() => onNext({ departments: selectedDepartments, goal: selectedGoal })}
        disabled={selectedDepartments.length === 0 || !selectedGoal}
        className="w-full"
        size="lg"
      >
        Continue
      </Button>
    </div>
  );
};

// Step 2: Automation Selection
const StepTwo = ({ 
  departments, 
  goal, 
  onNext, 
  onBack 
}: { 
  departments: string[], 
  goal: string, 
  onNext: (automation: string) => void,
  onBack: () => void 
}) => {
  const [selectedAutomation, setSelectedAutomation] = useState<string>("");

  const automations = [
    {
      id: "employee-onboarding",
      name: "Employee Onboarding Automation",
      description: "Automatically set up accounts, send welcome emails, and assign tasks",
      popular: true,
    },
    {
      id: "lead-nurturing",
      name: "Lead Nurturing Campaign",
      description: "Automatically follow up with leads and track engagement",
      popular: true,
    },
    {
      id: "device-management",
      name: "IT Device Management",
      description: "Track and manage company devices, software licenses",
      popular: false,
    },
    {
      id: "approval-workflow",
      name: "Approval Workflow",
      description: "Automate approval processes for expenses, time off, and more",
      popular: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Recommended Automations</h2>
        <p className="text-muted-foreground">
          Based on {departments.join(", ")} • Goal: {goal}
        </p>
      </div>

      <div className="space-y-3">
        {automations.map((automation) => (
          <button
            key={automation.id}
            onClick={() => setSelectedAutomation(automation.id)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedAutomation === automation.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold">{automation.name}</h3>
              {automation.popular && (
                <Badge variant="secondary" className="ml-2">Popular</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{automation.description}</p>
            {selectedAutomation === automation.id && (
              <CheckCircle2 className="mt-2 h-5 w-5 text-primary" />
            )}
          </button>
        ))}

        <button
          onClick={() => setSelectedAutomation("custom")}
          className={`w-full text-left p-4 rounded-lg border-2 border-dashed transition-all ${
            selectedAutomation === "custom"
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50"
          }`}
        >
          <h3 className="font-semibold">🎨 Build a Custom Automation</h3>
          <p className="text-sm text-muted-foreground">Create your own workflow from scratch</p>
        </button>
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="w-full" size="lg">
          Back
        </Button>
        <Button
          onClick={() => onNext(selectedAutomation)}
          disabled={!selectedAutomation}
          className="w-full"
          size="lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

// Step 3: API Connections
const StepThree = ({ 
  automation, 
  onComplete, 
  onBack 
}: { 
  automation: string, 
  onComplete: () => void,
  onBack: () => void 
}) => {
  const [connectedApis, setConnectedApis] = useState<string[]>([]);

  const requiredApis = automation === "custom" 
    ? [
        { id: "google", name: "Google Workspace", icon: "🔵", required: false },
        { id: "slack", name: "Slack", icon: "💬", required: false },
        { id: "github", name: "GitHub", icon: "🐙", required: false },
      ]
    : [
        { id: "google", name: "Google Workspace", icon: "🔵", required: true },
        { id: "slack", name: "Slack", icon: "💬", required: true },
        { id: "calendar", name: "Calendar", icon: "📅", required: false },
      ];

  const toggleConnection = (apiId: string) => {
    setConnectedApis(prev =>
      prev.includes(apiId) ? prev.filter(a => a !== apiId) : [...prev, apiId]
    );
  };

  const allRequiredConnected = requiredApis
    .filter(api => api.required)
    .every(api => connectedApis.includes(api.id));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Connect Your Tools</h2>
        <p className="text-muted-foreground">
          Connect the tools needed for your workflow
        </p>
      </div>

      <div className="space-y-3">
        {requiredApis.map((api) => (
          <div
            key={api.id}
            className="flex items-center justify-between p-4 rounded-lg border-2 border-border"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{api.icon}</span>
              <div>
                <h3 className="font-semibold">{api.name}</h3>
                {api.required && (
                  <Badge variant="secondary" className="mt-1">Required</Badge>
                )}
              </div>
            </div>
            <Button
              onClick={() => toggleConnection(api.id)}
              variant={connectedApis.includes(api.id) ? "default" : "outline"}
            >
              {connectedApis.includes(api.id) ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Connected
                </>
              ) : (
                "Connect"
              )}
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="w-full" size="lg">
          Back
        </Button>
        <Button
          onClick={onComplete}
          disabled={!allRequiredConnected}
          className="w-full"
          size="lg"
        >
          Complete Setup
        </Button>
      </div>
    </div>
  );
};

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState({
    departments: [] as string[],
    goal: "",
    automation: "",
  });

  const handleStepOneNext = (data: { departments: string[], goal: string }) => {
    setOnboardingData(prev => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleStepTwoNext = (automation: string) => {
    setOnboardingData(prev => ({ ...prev, automation }));
    setCurrentStep(3);
  };

  const handleComplete = () => {
    // Navigate to dashboard after completion
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 px-4 py-8">
      <div className="container max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">M</span>
                </div>
                <span className="text-lg font-bold">MyTechPassport</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-2 w-12 rounded-full transition-all ${
                      step <= currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            {currentStep === 1 && <StepOne onNext={handleStepOneNext} />}
            {currentStep === 2 && (
              <StepTwo
                departments={onboardingData.departments}
                goal={onboardingData.goal}
                onNext={handleStepTwoNext}
                onBack={() => setCurrentStep(1)}
              />
            )}
            {currentStep === 3 && (
              <StepThree
                automation={onboardingData.automation}
                onComplete={handleComplete}
                onBack={() => setCurrentStep(2)}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
