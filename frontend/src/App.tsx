import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/clerk-react";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../convex/_generated/api";
import Navbar  from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import CropDoctor from './CropDoctor/CropDoctor';
import Home from './Home/Home';
import Fieldbot from './Fieldbot/Fieldbot';
import CropAi from './CropAi/CropAi';
import AnimalDeduction from './AnimalDeduction/AnimalDeduction';
import PestManagement from './PestManagement/PestManagement';
import Pricing from './Pricing/Pricing';
import Profile from './Profile/Profile';
import Alert from './Alert/Alert';
import Chatbot from './Chatbot/Chatbot';
import Login from "./Login/Login";

export default function App() {
  return (
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/cropdoctor" element={<PrivateRoute><CropDoctor /></PrivateRoute>} />
          <Route path="/fieldbot" element={<PrivateRoute><Fieldbot /></PrivateRoute>} />
          <Route path="/cropai" element={<PrivateRoute><CropAi /></PrivateRoute>} />
          <Route path="/animaldetection" element={<PrivateRoute><AnimalDeduction/></PrivateRoute>} />
          <Route path="/pestmanagement" element={<PrivateRoute><PestManagement /></PrivateRoute>} />
          <Route path="/pricing" element={<PrivateRoute><Pricing /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/alert" element={<PrivateRoute><Alert /></PrivateRoute>} />
          <Route path="/chatbot" element={<PrivateRoute><Chatbot /></PrivateRoute>} />

          <Route path="*" element={<Login/>} />
        </Routes>
      </Router>
  );
}

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

function SignedIn() {
  const { numbers, viewer } =
    useQuery(api.myFunctions.listNumbers, {
      count: 10,
    }) ?? {};
  const addNumber = useMutation(api.myFunctions.addNumber);

  return (
    <>
      {/* <Navbar />
      <p>Welcome {viewer}!</p>
      <p className="flex gap-4 items-center">
        This is you:
        <UserButton afterSignOutUrl="#" />
      </p>
      <p>
        Click the button below and open this page in another window - this data
        is persisted in the Convex cloud database!
      </p>
      <p>
        <Button
          onClick={() => {
            void addNumber({ value: Math.floor(Math.random() * 10) });
          }}
        >
          Add a random number
        </Button>
      </p>
      <p>
        Numbers:{" "}
        {numbers?.length === 0
          ? "Click the button!"
          : numbers?.join(", ") ?? "..."}
      </p>
      <p>
        Edit{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          convex/myFunctions.ts
        </code>{" "}
        to change your backend
      </p>
      <p>
        Edit{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          src/App.tsx
        </code>{" "}
        to change your frontend
      </p>
      <p>
        Check out{" "}
        <a
          className="font-medium text-primary underline underline-offset-4"
          target="_blank"
          href="https://docs.convex.dev/home"
        >
          Convex docs
        </a>
      </p> */}
    </>
  );
}
