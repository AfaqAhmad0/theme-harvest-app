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
    const goals = new Set<string>();
    
    if (selectedDepartments.includes("marketing")) {
      goals.add("Generate leads");
      goals.add("Manage campaigns");
      goals.add("Track analytics");
      goals.add("Social media automation");
    }
    if (selectedDepartments.includes("it")) {
      goals.add("Manage devices");
      goals.add("User onboarding/offboarding");
      goals.add("System monitoring");
      goals.add("Security compliance");
    }
    if (selectedDepartments.includes("sales")) {
      goals.add("Lead tracking");
      goals.add("CRM automation");
      goals.add("Pipeline management");
      goals.add("Follow-up automation");
    }
    if (selectedDepartments.includes("hr")) {
      goals.add("Employee onboarding");
      goals.add("Leave management");
      goals.add("Performance tracking");
      goals.add("Recruitment automation");
    }
    if (selectedDepartments.includes("operations")) {
      goals.add("Process automation");
      goals.add("Workflow optimization");
      goals.add("Resource management");
      goals.add("Task tracking");
    }
    if (selectedDepartments.includes("finance")) {
      goals.add("Invoice automation");
      goals.add("Expense tracking");
      goals.add("Financial reporting");
      goals.add("Budget management");
    }
    
    // Default goals if no specific department goals
    if (goals.size === 0) {
      return ["Automate workflows", "Improve productivity", "Reduce costs", "Streamline operations"];
    }
    
    return Array.from(goals);
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
      id: "client-onboarding",
      name: "Client Onboarding",
      description: "Used by 89% of successful businesses",
      benefit: "Saves 5+ hours/week: Google Forms → HubSpot → Gmail automation",
      topPick: true,
      color: "blue",
    },
    {
      id: "invoice-automation",
      name: "Invoice Automation",
      description: "Reduces billing time by 75%",
      benefit: "Saves 4+ hours/week with automated invoice handling",
      topPick: false,
      color: "green",
    },
    {
      id: "social-media-posting",
      name: "Social Media Posting",
      description: "2x your social engagement",
      benefit: "Saves 3+ hours/week on social media management",
      topPick: false,
      color: "purple",
    },
  ];

  const colorClasses = {
    blue: "border-blue-500 bg-blue-50 dark:bg-blue-950/20",
    green: "border-green-500 bg-green-50 dark:bg-green-950/20",
    purple: "border-purple-500 bg-purple-50 dark:bg-purple-950/20",
  };

  const iconColorClasses = {
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          Recommended Next Steps! <span className="text-2xl">🎯</span>
        </h2>
        <p className="text-muted-foreground">
          Based on your profile, we've selected the perfect workflows to get you started.
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
          <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-1">Your Personalized Automation Plan</h3>
        <p className="text-sm text-muted-foreground">
          We've analyzed thousands of successful businesses and identified these top workflows for you.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {automations.map((automation) => (
          <div
            key={automation.id}
            className={`relative p-6 rounded-xl border-2 transition-all ${
              selectedAutomation === automation.id 
                ? "ring-2 ring-primary ring-offset-2" 
                : ""
            } ${colorClasses[automation.color as keyof typeof colorClasses]}`}
          >
            {automation.topPick && (
              <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary">
                Top Pick
              </Badge>
            )}
            
            <div className="flex items-start gap-3 mb-4">
              <svg 
                className={`h-6 w-6 mt-1 ${iconColorClasses[automation.color as keyof typeof iconColorClasses]}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <div>
                <h4 className="font-semibold text-foreground">{automation.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{automation.description}</p>
              </div>
            </div>

            <Button
              onClick={() => setSelectedAutomation(automation.id)}
              className="w-full mb-3"
              variant={selectedAutomation === automation.id ? "default" : "secondary"}
            >
              {selectedAutomation === automation.id ? "Selected" : "Choose This"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              {automation.benefit}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Explore Other Recommended Workflows
        </Button>
      </div>

      <div className="flex gap-3">
        <Button onClick={onBack} variant="outline" className="w-full" size="lg">
          Previous
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
