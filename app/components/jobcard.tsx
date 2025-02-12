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
    <Card
      shadow="xl"
      padding="lg"
      radius="md"
      className="bg-white w-full border"
    >
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
      <Group gap="xs" className="text-gray-500 text-xs">
        <Group gap={3}>
          <IconBriefcase size={14} className="text-gray-500" />
          <Text size="sm">{experience}</Text>
        </Group>
        <Group gap={3}>
          <IconMapPin size={14} className="text-gray-500" />
          <Text size="sm">{location}</Text>
        </Group>
        <Group gap={3}>
          <IconCurrencyDollar size={14} className="text-gray-500" />
          <Text size="sm">{salary}</Text>
        </Group>
      </Group>

      {/* Job Description */}
      <ul
        className="mt-1 text-gray-500 list-disc list-inside"
        style={{ fontSize: "0.75rem" }}
      >
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
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuD7O9_iy4sJmYzRkL8eBW8Z0yavZdJvwmQ&s",
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
      logo: "data:image/jpeg;base64,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",
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
      logo: "data:image/png;base64,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",
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
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuD7O9_iy4sJmYzRkL8eBW8Z0yavZdJvwmQ&s",
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
        cols={{ base: 1, sm: 2, lg: 4 }} // Responsive column control
        spacing="lg"
      >
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default JobList;
