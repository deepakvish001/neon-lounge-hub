<lov-code>
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { tracks } from "@/constants";
import { 
  ArrowLeft, BookOpen, Code, ExternalLink, BookmarkPlus, CheckCircle, Copy, 
  ThumbsUp, Star, Coffee, Clock, Search, Download, Share2, Award, 
  Lightbulb, FileText, MessageSquare, Users, Play, ChevronRight, ChevronLeft,
  Sun, Moon, Maximize, Minimize, BookMarked, Eye, EyeOff, PenTool, Save,
  RotateCcw, Send, Sparkles, Palette, Zap, Bot, Brain, Loader, X, Plus, 
  TerminalSquare, PlayCircle, PauseCircle, HelpCircle, Smartphone
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/clerk-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardContent,
  HoverCardDescription,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { CalendarDateRangePicker } from "@/components/ui/calendar-date-range-picker"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useSearchParams } from 'react-router-dom';

interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
}

const ModuleContent = () => {
  const { toast } = useToast();
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isAIEnabled, setIsAIEnabled] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [showVisualExample, setShowVisualExample] = useState(false);
  const [visualExampleContent, setVisualExampleContent] = useState('');
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);
  const [discussionMessages, setDiscussionMessages] = useState([
    { id: 1, author: 'User1', text: 'Great explanation of the concepts!' },
    { id: 2, author: 'User2', text: 'I have a question about...' },
  ]);
  const [newDiscussionMessage, setNewDiscussionMessage] = useState('');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const timerInterval = useRef<number | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const [isOutputVisible, setIsOutputVisible] = useState(true);
  const [codeEditorContent, setCodeEditorContent] = useState(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>HTML Example</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a basic HTML example.</p>
  </body>
  </html>
  `);
  const [outputContent, setOutputContent] = useState('');
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [aiAssistantMessages, setAiAssistantMessages] = useState([
    { id: 1, sender: 'AI', text: 'How can I help you with this module?' },
  ]);
  const [newAiAssistantMessage, setNewAiAssistantMessage] = useState('');
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([
    {
      id: 1,
      text: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'Home Tool Management Language',
        'Hyperlinks and Text Markup Language',
        'None of the above',
      ],
      correctAnswer: 'Hyper Text Markup Language',
    },
  ]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [isCodePlaygroundOpen, setIsCodePlaygroundOpen] = useState(false);
  const [codePlaygroundContent, setCodePlaygroundContent] = useState(`
  function greet() {
    console.log("Hello, world!");
  }
  greet();
  `);
  const [codePlaygroundOutput, setCodePlaygroundOutput] = useState('');
  const [isContentViewerOpen, setIsContentViewerOpen] = useState(true);
  const [contentViewerContent, setContentViewerContent] = useState('This is the content of the module.');
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [achievements, setAchievements] = useState([
    { id: 1, title: 'First Module', description: 'Completed the first module.', icon: Star },
  ]);
  const [isCommunityChartOpen, setIsCommunityChartOpen] = useState(false);
  const [communityData, setCommunityData] = useState([
    { name: 'Week 1', value: 50 },
    { name: 'Week 2', value: 75 },
    { name: 'Week 3', value: 100 },
  ]);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [isMiniGameOpen, setIsMiniGameOpen] = useState(false);
  const [miniGameScore, setMiniGameScore] = useState(0);
  const [isResourceCardOpen, setIsResourceCardOpen] = useState(false);
  const [resourceCardContent, setResourceCardContent] = useState({
    title: 'Additional Resources',
    description: 'Check out these resources for more information.',
    link: 'https://example.com',
  });
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [flashcards, setFlashcards] = useState([
    { id: 1, front: 'What is HTML?', back: 'Hyper Text Markup Language' },
  ]);
  const [isNoteTakingOpen, setIsNoteTakingOpen] = useState(false);
  const [noteTakingText, setNoteTakingText] = useState('');
  const [isProgressIndicatorOpen, setIsProgressIndicatorOpen] = useState(false);
  const [progressIndicatorValue, setProgressIndicatorValue] = useState(50);
  const [isEnhancedAnimationsOpen, setIsEnhancedAnimationsOpen] = useState(false);
  const [isDarkModeToggleOpen, setIsDarkModeToggleOpen] = useState(false);
  const [isCodeHighlightOpen, setIsCodeHighlightOpen] = useState(false);
  const [codeHighlightText, setCodeHighlightText] = useState('// This is a highlighted code example');
  const [isStudyTimerOpen, setIsStudyTimerOpen] = useState(false);
  const [studyTimerDuration, setStudyTimerDuration] = useState(25 * 60);
  const [isCodeSearchOpen, setIsCodeSearchOpen] = useState(false);
  const [codeSearchText, setCodeSearchText] = useState('HTML');
  const [isFocusModeOverlayOpen, setIsFocusModeOverlayOpen] = useState(false);
  const [focusModeOverlayContent, setFocusModeOverlayContent] = useState('This is the content in focus mode.');
  const [isInteractiveComponentOpen, setIsInteractiveComponentOpen] = useState(false);
  const [interactiveComponentValue, setInteractiveComponentValue] = useState(0);
  const [isVisualExamplesOpen, setIsVisualExamplesOpen] = useState(false);
  const [visualExamplesContent, setVisualExamplesContent] = useState('This is a visual example.');
  const [isAccessibilityFeaturesOpen, setIsAccessibilityFeaturesOpen] = useState(false);
  const [accessibilityFeaturesContent, setAccessibilityFeaturesContent] = useState('These are accessibility features.');
  const [isPerformanceOptimizationOpen, setIsPerformanceOptimizationOpen] = useState(false);
  const [performanceOptimizationContent, setPerformanceOptimizationContent] = useState('These are performance optimization techniques.');
  const [isVersionControlOpen, setIsVersionControlOpen] = useState(false);
  const [versionControlContent, setVersionControlContent] = useState('This is version control information.');
  const [isDebuggingTechniquesOpen, setIsDebuggingTechniquesOpen] = useState(false);
  const [debuggingTechniquesContent, setDebuggingTechniquesContent] = useState('These are debugging techniques.');
  const [isTestingStrategiesOpen, setIsTestingStrategiesOpen] = useState(false);
  const [testingStrategiesContent, setTestingStrategiesContent] = useState('These are testing strategies.');
  const [isDeploymentProcessOpen, setIsDeploymentProcessOpen] = useState(false);
  const [deploymentProcessContent, setDeploymentProcessContent] = useState('This is the deployment process.');
  const [isContinuousIntegrationOpen, setIsContinuousIntegrationOpen] = useState(false);
  const [continuousIntegrationContent, setContinuousIntegrationContent] = useState('This is continuous integration information.');
  const [isSecurityConsiderationsOpen, setIsSecurityConsiderationsOpen] = useState(false);
  const [securityConsiderationsContent, setSecurityConsiderationsContent] = useState('These are security considerations.');
  const [isScalabilityStrategiesOpen, setIsScalabilityStrategiesOpen] = useState(false);
  const [scalabilityStrategiesContent, setScalabilityStrategiesContent] = useState('These are scalability strategies.');
  const [isMonitoringToolsOpen, setIsMonitoringToolsOpen] = useState(false);
  const [monitoringToolsContent, setMonitoringToolsContent] = useState('These are monitoring tools.');
  const [isBackupRecoveryOpen, setIsBackupRecoveryOpen] = useState(false);
  const [backupRecoveryContent, setBackupRecoveryContent] = useState('This is backup and recovery information.');
  const [isDisasterRecoveryOpen, setIsDisasterRecoveryOpen] = useState(false);
  const [disasterRecoveryContent, setDisasterRecoveryContent] = useState('This is disaster recovery information.');
  const [isComplianceStandardsOpen, setIsComplianceStandardsOpen] = useState(false);
  const [complianceStandardsContent, setComplianceStandardsContent] = useState('These are compliance standards.');
  const [isLegalConsiderationsOpen, setIsLegalConsiderationsOpen] = useState(false);
  const [legalConsiderationsContent, setLegalConsiderationsContent] = useState('These are legal considerations.');
  const [isEthicalConsiderationsOpen, setIsEthicalConsiderationsOpen] = useState(false);
  const [ethicalConsiderationsContent, setEthicalConsiderationsContent] = useState('These are ethical considerations.');
  const [isFutureTrendsOpen, setIsFutureTrendsOpen] = useState(false);
  const [futureTrendsContent, setFutureTrendsContent] = useState('These are future trends.');
  const [isAdditionalResourcesOpen, setIsAdditionalResourcesOpen] = useState(false);
  const [additionalResourcesContent, setAdditionalResourcesContent] = useState('These are additional resources.');
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [faqContent, setFaqContent] = useState('These are frequently asked questions.');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [glossaryContent, setGlossaryContent] = useState('This is a glossary of terms.');
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [caseStudiesContent, setCaseStudiesContent] = useState('These are case studies.');
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [templatesContent, setTemplatesContent] = useState('These are templates.');
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [toolsContent, setToolsContent] = useState('These are tools.');
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const [examplesContent, setExamplesContent] = useState('These are examples.');
  const [isChallengesOpen, setIsChallengesOpen] = useState(false);
  const [challengesContent, setChallengesContent] = useState('These are challenges.');
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [projectsContent, setProjectsContent] = useState('These are projects.');
  const [isQuizzesOpen, setIsQuizzesOpen] = useState(false);
  const [quizzesContent, setQuizzesContent] = useState('These are quizzes.');
  const [isAssignmentsOpen, setIsAssignmentsOpen] = useState(false);
  const [assignmentsContent, setAssignmentsContent] = useState('These are assignments.');
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(false);
  const [assessmentsContent, setAssessmentsContent] = useState('These are assessments.');
  const [isExamsOpen, setIsExamsOpen] = useState(false);
  const [examsContent, setExamsContent] = useState('These are exams.');
  const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);
  const [certificationsContent, setCertificationsContent] = useState('These are certifications.');
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [portfolioContent, setPortfolioContent] = useState('This is a portfolio.');
  const [isCareerResourcesOpen, setIsCareerResourcesOpen] = useState(false);
  const [careerResourcesContent, setCareerResourcesContent] = useState('These are career resources.');
  const [isInterviewsOpen, setIsInterviewsOpen] = useState(false);
  const [interviewsContent, setInterviewsContent] = useState('These are interviews.');
  const [isJobBoardsOpen, setIsJobBoardsOpen] = useState(false);
  const [jobBoardsContent, setJobBoardsContent] = useState('These are job boards.');
  const [isNetworkingOpen, setIsNetworkingOpen] = useState(false);
  const [networkingContent, setNetworkingContent] = useState('This is networking information.');
  const [isMentorshipOpen, setIsMentorshipOpen] = useState(false);
  const [mentorshipContent, setMentorshipContent] = useState('This is mentorship information.');
  const [isCommunityForumsOpen, setIsCommunityForumsOpen] = useState(false);
  const [communityForumsContent, setCommunityForumsContent] = useState('These are community forums.');
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [eventsContent, setEventsContent] = useState('These are events.');
  const [isWebinarsOpen, setIsWebinarsOpen] = useState(false);
  const [webinarsContent, setWebinarsContent] = useState('These are webinars.');
  const [isConferencesOpen, setIsConferencesOpen] = useState(false);
  const [conferencesContent, setConferencesContent] = useState('These are conferences.');
  const [isWorkshopsOpen, setIsWorkshopsOpen] = useState(false);
  const [workshopsContent, setWorkshopsContent] = useState('These are workshops.');
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false);
  const [tutorialsContent, setTutorialsContent] = useState('These are tutorials.');
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
  const [guidesContent, setGuidesContent] = useState('These are guides.');
  const [isDocumentationOpen, setIsDocumentationOpen] = useState(false);
  const [documentationContent, setDocumentationContent] = useState('This is documentation.');
  const [isAPIReferenceOpen, setIsAPIReferenceOpen] = useState(false);
  const [apiReferenceContent, setApiReferenceContent] = useState('This is an API reference.');
  const [isSDKsOpen, setIsSDKsOpen] = useState(false);
  const [sdksContent, setSDKsContent] = useState('These are SDKs.');
  const [isLibrariesOpen, setIsLibrariesOpen] = useState(false);
  const [librariesContent, setLibrariesContent] = useState('These are libraries.');
  const [isFrameworksOpen, setIsFrameworksOpen] = useState(false);
  const [frameworksContent, setFrameworksContent] = useState('These are frameworks.');
  const [isDesignPatternsOpen, setIsDesignPatternsOpen] = useState(false);
  const [designPatternsContent, setDesignPatternsContent] = useState('These are design patterns.');
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [architectureContent, setArchitectureContent] = useState('This is architecture information.');
  const [isDataStructuresOpen, setIsDataStructuresOpen] = useState(false);
  const [dataStructuresContent, setDataStructuresContent] = useState('These are data structures.');
  const [isAlgorithmsOpen, setIsAlgorithmsOpen] = useState(false);
  const [algorithmsContent, setAlgorithmsContent] = useState('These are algorithms.');
  const [isDatabasesOpen, setIsDatabasesOpen] = useState(false);
  const [databasesContent, setDatabasesContent] = useState('These are databases.');
  const [isOperatingSystemsOpen, setIsOperatingSystemsOpen] = useState(false);
  const [operatingSystemsContent, setOperatingSystemsContent] = useState('These are operating systems.');
  const [isNetworkingConceptsOpen, setIsNetworkingConceptsOpen] = useState(false);
  const [networkingConceptsContent, setNetworkingConceptsContent] = useState('These are networking concepts.');
  const [isCloudComputingOpen, setIsCloudComputingOpen] = useState(false);
  const [cloudComputingContent, setCloudComputingContent] = useState('This is cloud computing information.');
  const [isMobileDevelopmentOpen, setIsMobileDevelopmentOpen] = useState(false);
  const [mobileDevelopmentContent, setMobileDevelopmentContent] = useState('This is mobile development information.');
  const [isGameDevelopmentOpen, setIsGameDevelopmentOpen] = useState(false);
  const [gameDevelopmentContent, setGameDevelopmentContent] = useState('This is game development information.');
  const [isArtificialIntelligenceOpen, setIsArtificialIntelligenceOpen] = useState(false);
  const [artificialIntelligenceContent, setArtificialIntelligenceContent] = useState('This is artificial intelligence information.');
  const [isMachineLearningOpen, setIsMachineLearningOpen] = useState(false);
  const [machineLearningContent, setMachineLearningContent] = useState('This is machine learning information.');
  const [isDeepLearningOpen, setIsDeepLearningOpen] = useState(false);
  const [deepLearningContent, setDeepLearningContent] = useState('This is deep learning information.');
  const [isDataScienceOpen, setIsDataScienceOpen] = useState(false);
  const [dataScienceContent, setDataScienceContent] = useState('This is data science information.');
  const [isBigDataOpen, setIsBigDataOpen] = useState(false);
  const [bigDataContent, setBigDataContent] = useState('This is big data information.');
  const [isBlockchainOpen, setIsBlockchainOpen] = useState(false);
  const [blockchainContent, setBlockchainContent] = useState('This is blockchain information.');
  const [isInternetOfThingsOpen, setIsInternetOfThingsOpen] = useState(false);
  const [internetOfThingsContent, setInternetOfThingsContent] = useState('This is internet of things information.');
  const [isCybersecurityOpen, setIsCybersecurityOpen] = useState(false);
  const [cybersecurityContent, setCybersecurityContent] = useState('This is cybersecurity information.');
  const [isRoboticsOpen, setIsRoboticsOpen] = useState(false);
  const [roboticsContent, setRoboticsContent] = useState('This is robotics information.');
  const [isVirtualRealityOpen, setIsVirtualRealityOpen] = useState(false);
  const [virtualRealityContent, setVirtualRealityContent] = useState('This is virtual reality information.');
  const [isAugmentedRealityOpen, setIsAugmentedRealityOpen] = useState(false);
  const [augmentedRealityContent, setAugmentedRealityContent] = useState('This is augmented reality information.');
  const [isMixedRealityOpen, setIsMixedRealityOpen] = useState(false);
  const [mixedRealityContent, setMixedRealityContent] = useState('This is mixed reality information.');
  const [isNanotechnologyOpen, setIsNanotechnologyOpen] = useState(false);
  const [nanotechnologyContent, setNanotechnologyContent] = useState('This is nanotechnology information.');
  const [isBiotechnologyOpen, setIsBiotechnologyOpen] = useState(false);
  const [biotechnologyContent, setBiotechnologyContent] = useState('This is biotechnology information.');
  const [isSpaceExplorationOpen, setIsSpaceExplorationOpen] = useState(false);
  const [spaceExplorationContent, setSpaceExplorationContent] = useState('This is space exploration information.');
  const [isQuantumComputingOpen, setIsQuantumComputingOpen] = useState(false);
  const [quantumComputingContent, setQuantumComputingContent] = useState('This is quantum computing information.');
  const [isSustainableTechnologyOpen, setIsSustainableTechnologyOpen] = useState(false);
  const [sustainableTechnologyContent, setSustainableTechnologyContent] = useState('This is sustainable technology information.');
  const [isHealthTechnologyOpen, setIsHealthTechnologyOpen] = useState(false);
  const [healthTechnologyContent, setHealthTechnologyContent] = useState('This is health technology information.');
  const [isEducationalTechnologyOpen, setIsEducationalTechnologyOpen] = useState(false);
  const [educationalTechnologyContent, setEducationalTechnologyContent] = useState('This is educational technology information.');
  const [isFinancialTechnologyOpen, setIsFinancialTechnologyOpen] = useState(false);
  const [financialTechnologyContent, setFinancialTechnologyContent] = useState('This is financial technology information.');
  const [isLegalTechnologyOpen, setIsLegalTechnologyOpen] = useState(false);
  const [legalTechnologyContent, setLegalTechnologyContent] = useState('This is legal technology information.');
  const [isGovernmentTechnologyOpen, setIsGovernmentTechnologyOpen] = useState(false);
  const [governmentTechnologyContent, setGovernmentTechnologyContent] = useState('This is government technology information.');
  const [isSocialTechnologyOpen, setIsSocialTechnologyOpen] = useState(false);
  const [socialTechnologyContent, setSocialTechnologyContent] = useState('This is social technology information.');
  const [isEnvironmentalTechnologyOpen, setIsEnvironmentalTechnologyOpen] = useState(false);
  const [environmentalTechnologyContent, setEnvironmentalTechnologyContent] = useState('This is environmental technology information.');
  const [isEnergyTechnologyOpen, setIsEnergyTechnologyOpen] = useState(false);
  const [energyTechnologyContent, setEnergyTechnologyContent] = useState('This is energy technology information.');
  const [isTransportationTechnologyOpen, setIsTransportationTechnologyOpen] = useState(false);
  const [transportationTechnologyContent, setTransportationTechnologyContent] = useState('This is transportation technology information.');
  const [isManufacturingTechnologyOpen, setIsManufacturingTechnologyOpen] = useState(false);
  const [manufacturingTechnologyContent, setManufacturingTechnologyContent] = useState('This is manufacturing technology information.');
  const [isAgriculturalTechnologyOpen, setIsAgriculturalTechnologyOpen] = useState(false);
  const [agriculturalTechnologyContent, setAgriculturalTechnologyContent] = useState('This is agricultural technology information.');
  const [isConstructionTechnologyOpen, setIsConstructionTechnologyOpen] = useState(false);
  const [constructionTechnologyContent, setConstructionTechnologyContent] = useState('This is construction technology information.');
  const [isMediaTechnologyOpen, setIsMediaTechnologyOpen] = useState(false);
  const [mediaTechnologyContent, setMediaTechnologyContent] = useState('This is media technology information.');
  const [isEntertainmentTechnologyOpen, setIsEntertainmentTechnologyOpen] = useState(false);
  const [entertainmentTechnologyContent, setEntertainmentTechnologyContent] = useState('This is entertainment technology information.');
  const [isArtsTechnologyOpen, setIsArtsTechnologyOpen] = useState(false);
  const [artsTechnologyContent, setArtsTechnologyContent] = useState('This is arts technology information.');
  const [isHumanitiesTechnologyOpen, setIsHumanitiesTechnologyOpen] = useState(false);
  const [humanitiesTechnologyContent, setHumanitiesTechnologyContent] = useState('This is humanities technology information.');
  const [isScienceTechnologyOpen, setIsScienceTechnologyOpen] = useState(false);
  const [scienceTechnologyContent, setScienceTechnologyContent] = useState('This is science technology information.');
  const [isMathematicsTechnologyOpen, setIsMathematicsTechnologyOpen] = useState(false);
  const [mathematicsTechnologyContent, setMathematicsTechnologyContent] = useState('This is mathematics technology information.');
  const [isEngineeringTechnologyOpen, setIsEngineeringTechnologyOpen] = useState(false);
  const [engineeringTechnologyContent, setEngineeringTechnologyContent] = useState('This is engineering technology information.');
  const [isTechnologyTechnologyOpen, setIsTechnologyTechnologyOpen] = useState(false);
  const [technologyTechnologyContent, setTechnologyTechnologyContent] = useState('This is technology technology information.');
  const [isBusinessTechnologyOpen, setIsBusinessTechnologyOpen] = useState(false);
  const [businessTechnologyContent, setBusinessTechnologyContent] = useState('This is business technology information.');
  const [isMarketingTechnologyOpen, setIsMarketingTechnologyOpen] = useState(false);
  const [marketingTechnologyContent, setMarketingTechnologyContent] = useState('This is marketing technology information.');
  const [isSalesTechnologyOpen, setIsSalesTechnologyOpen] = useState(false);
  const [salesTechnologyContent, setSalesTechnologyContent] = useState('This is sales technology information.');
  const [isCustomerServiceTechnologyOpen, setIsCustomerServiceTechnologyOpen] = useState(false);
  const [customerServiceTechnologyContent, setCustomerServiceTechnologyContent] = useState('This is customer service technology information.');
  const [isHumanResourcesTechnologyOpen, setIsHumanResourcesTechnologyOpen] = useState(false);
  const [humanResourcesTechnologyContent, setHumanResourcesTechnologyContent] = useState('This is human resources technology information.');
  const [isFinanceTechnologyOpen, setIsFinanceTechnologyOpen] = useState(false);
  const [financeTechnologyContent, setFinanceTechnologyContent] = useState('This is finance technology information.');
  const [isAccountingTechnologyOpen, setIsAccountingTechnologyOpen] = useState(false);
  const [accountingTechnologyContent, setAccountingTechnologyContent] = useState('This is accounting technology information.');
  const [isEconomicsTechnologyOpen, setIsEconomicsTechnologyOpen] = useState(false);
  const [economicsTechnologyContent, setEconomicsTechnologyContent] = useState('This is economics technology information.');
  const [isPoliticalScienceTechnologyOpen, setIsPoliticalScienceTechnologyOpen] = useState(false);
  const [politicalScienceTechnologyContent, setPoliticalScienceTechnologyContent] = useState('This is political science technology information.');
  const [isSociologyTechnologyOpen, setIsSociologyTechnologyOpen] = useState(false);
  const [sociologyTechnologyContent, setSociologyTechnologyContent] = useState('This is sociology technology information.');
  const [isPsychologyTechnologyOpen, setIsPsychologyTechnologyOpen] = useState(false);
  const [psychologyTechnologyContent, setPsychologyTechnologyContent] = useState('This is psychology technology information.');
  const [isHistoryTechnologyOpen, setIsHistoryTechnologyOpen] = useState(false);
  const [historyTechnologyContent, setHistoryTechnologyContent] = useState('This is history technology information.');
  const [isGeographyTechnologyOpen, setIsGeographyTechnologyOpen] = useState(false);
  const [geographyTechnologyContent, setGeographyTechnologyContent] = useState('This is geography technology information.');
  const [isPhilosophyTechnologyOpen, setIsPhilosophyTechnologyOpen] = useState(false);
  const [philosophyTechnologyContent, setPhilosophyTechnologyContent] = useState('This is philosophy technology information.');
  const [isReligionTechnologyOpen, setIsReligionTechnologyOpen] = useState(false);
  const [religionTechnologyContent, setReligionTechnologyContent] = useState('This is religion technology information.');
  const [isLanguagesTechnologyOpen, setIsLanguagesTechnologyOpen] = useState(false);
  const [languagesTechnologyContent, setLanguagesTechnologyContent] = useState('This is languages technology information.');
  const [isLiteratureTechnologyOpen, setIsLiteratureTechnologyOpen] = useState(false);
  const [literatureTechnologyContent, setLiteratureTechnologyContent] = useState('This is literature technology information.');
  const [isMusicTechnologyOpen, setIsMusicTechnologyOpen] = useState(false);
  const [musicTechnologyContent, setMusicTechnologyContent] = useState('This is music technology information.');
  const [isArtTechnologyOpen, setIsArtTechnologyOpen] = useState(false);
  const [artTechnologyContent, setArtTechnologyContent] = useState('This is art technology information.');
  const [isDanceTechnologyOpen, setIsDanceTechnologyOpen] = useState(false);
  const [danceTechnologyContent, setDanceTechnologyContent] = useState('This is dance technology information.');
  const [isTheaterTechnologyOpen, setIsTheaterTechnologyOpen] = useState(false);
  const [theaterTechnologyContent, setTheaterTechnologyContent] = useState('This is theater technology information.');
  const [isFilmTechnologyOpen, setIsFilmTechnologyOpen] = useState(false);
  const [filmTechnologyContent, setFilmTechnologyContent] = useState('This is film technology information.');
  const [isTelevisionTechnologyOpen, setIsTelevisionTechnologyOpen] = useState(false);
  const [televisionTechnologyContent, setTelevisionTechnologyContent] = useState('This is television technology information.');
  const [isRadioTechnologyOpen, setIsRadioTechnologyOpen] = useState(false);
  const [radioTechnologyContent, setRadioTechnologyContent] = useState('This is radio technology information.');
  const [isJournalismTechnologyOpen, setIsJournalismTechnologyOpen] = useState(false);
  const [journalismTechnologyContent, setJournalismTechnologyContent] = useState('This is journalism technology information.');
  const [isCommunicationTechnologyOpen, setIsCommunicationTechnologyOpen] = useState(false);
  const [communicationTechnologyContent, setCommunicationTechnologyContent] = useState('This is communication technology information.');
  const [isEducationTechnologyOpen, setIsEducationTechnologyOpen] = useState(false);
  const [educationTechnologyContent, setEducationTechnologyContent] = useState('This is education technology information.');
  const [isHealthTechnologyOpen, setIsHealthTechnologyOpen] = useState(false);
  const [healthTechnologyContent, setHealthTechnologyContent] = useState('This is health technology information.');
  const [isBusinessTechnologyOpen, setIsBusinessTechnologyOpen] = useState(false);
  const [businessTechnologyContent, setBusinessTechnologyContent] = useState('This is business technology information.');
  const [isGovernmentTechnologyOpen, setIsGovernmentTechnologyOpen] = useState(false);
  const [governmentTechnologyContent, setGovernmentTechnologyContent] = useState('This is government technology information.');
  const [isSocialTechnologyOpen, setIsSocialTechnologyOpen] = useState(false);
  const [socialTechnologyContent, setSocialTechnologyContent] = useState('This is social technology information.');
  const [isEnvironmentalTechnologyOpen, setIsEnvironmentalTechnologyOpen] = useState(false);
  const [environmentalTechnologyContent, setEnvironmentalTechnologyContent] = useState('This is environmental technology information.');
  const [isEnergyTechnologyOpen, setIsEnergyTechnologyOpen] = useState(false);
  const [energyTechnologyContent, setEnergyTechnologyContent] = useState('This is energy technology information.');
  const [isTransportationTechnologyOpen, setIsTransportationTechnologyOpen] = useState(false);
  const [transportationTechnologyContent, setTransportationTechnologyContent] = useState('This is transportation technology information.');
  const [isManufacturingTechnologyOpen, setIsManufacturingTechnologyOpen] = useState(false);
  const [manufacturingTechnologyContent, setManufacturingTechnologyContent] = useState('This is manufacturing technology information.');
  const [isAgriculturalTechnologyOpen, setIsAgriculturalTechnologyOpen] = useState(false);
  const [agriculturalTechnologyContent, setAgriculturalTechnologyContent] = useState('This is agricultural technology information.');
  const [isConstructionTechnologyOpen, setIsConstructionTechnologyOpen] = useState(false);
  const [constructionTechnologyContent, setConstructionTechnologyContent] = useState('This is construction technology information.');
  const [isMediaTechnologyOpen, setIsMediaTechnologyOpen] = useState(false);
  const [mediaTechnologyContent, setMediaTechnologyContent] = useState('This is media technology information.');
  const [isEntertainmentTechnologyOpen, setIsEntertainmentTechnologyOpen] = useState(false);
  const [entertainmentTechnologyContent, setEntertainmentTechnologyContent] = useState('This is entertainment technology information.');
  const [isArtsTechnologyOpen, setIsArtsTechnologyOpen] = useState(false);
  const [artsTechnologyContent, setArtsTechnologyContent] = useState('This is arts technology information.');
  const [isHumanitiesTechnologyOpen, setIs
