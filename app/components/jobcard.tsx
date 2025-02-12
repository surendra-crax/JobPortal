import {
  Card,
  Avatar,
  Text,
  Badge,
  Group,
  SimpleGrid,
  Button,
} from "@mantine/core";
import {
  IconBriefcase,
  IconMapPin,
  IconCurrencyDollar,
} from "@tabler/icons-react";

// Define JobCard Props Type
interface JobCardProps {
  logo: string;
  time: string;
  role: string;
  experience: string;
  location: string;
  salary: string;
  description: string[];
}

const JobCard = ({
  logo,
  time,
  role,
  experience,
  location,
  salary,
  description,
}: JobCardProps) => {
  return (
    <Card shadow="xl" padding="lg" radius="md" className="bg-white w-full border">
      {/* Logo & Time Badge */}
      <Group justify="space-between" mb="sm">
        <Avatar src={logo} size="lg" radius="xl" />
        <Badge color="gray" size="sm">
          {time}
        </Badge>
      </Group>

      {/* Job Role */}
      <Text size="lg" fw={600} mb={8}>
        {role}
      </Text>

      {/* Job Details */}
      <Group spacing="xs" className="text-gray-500 text-xs">
        <Group spacing={3}>
          <IconBriefcase size={14} className="text-gray-500" />
          <Text size="sm">{experience}</Text>
        </Group>
        <Group spacing={3}>
          <IconMapPin size={14} className="text-gray-500" />
          <Text size="sm">{location}</Text>
        </Group>
        <Group spacing={3}>
          <IconCurrencyDollar size={14} className="text-gray-500" />
          <Text size="sm">{salary}</Text>
        </Group>
      </Group>

      {/* Job Description */}
      <ul className="mt-1 text-gray-500 list-disc list-inside" style={{ fontSize: "0.75rem" }}>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Apply Now Button */}
      <Button mt="lg" fullWidth variant="filled" color="blue">
        Apply Now
      </Button>
    </Card>
  );
};

// Job List Component
const JobList = () => {
  const jobs: JobCardProps[] = [
    {
      logo: "https://example.com/logo1.png",
      time: "2 hours ago",
      role: "Frontend Developer",
      experience: "2-4 yrs",
      location: "Onsite",
      salary: "$50k - $70k",
      description: [
        "Develop and maintain robust web applications.",
        "Write clean, efficient, and reusable code.",
      ],
    },
    {
      logo: "https://example.com/logo2.png",
      time: "4 hours ago",
      role: "Backend Developer",
      experience: "3-5 yrs",
      location: "Remote",
      salary: "$60k - $80k",
      description: [
        "Build and optimize scalable backend systems.",
        "Ensure database and API performance.",
      ],
    },
    {
      logo: "https://example.com/logo3.png",
      time: "1 day ago",
      role: "Full Stack Developer",
      experience: "4-6 yrs",
      location: "Hybrid",
      salary: "$70k - $90k",
      description: [
        "Develop and maintain full-stack applications.",
        "Ensure seamless integration between frontend & backend.",
      ],
    },
    {
      logo: "https://example.com/logo4.png",
      time: "3 days ago",
      role: "UI/UX Designer",
      experience: "2-3 yrs",
      location: "Onsite",
      salary: "$40k - $60k",
      description: [
        "Create user-friendly UI/UX designs.",
        "Work closely with developers for design implementation.",
      ],
    },
  ];

  return (
    <div className="flex justify-center px-4 mt-12">
      <SimpleGrid
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: "lg", cols: 2 },
          { maxWidth: "md", cols: 1 },
        ]}
      >
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default JobList;
