import { useState } from "react";
import {
  Button,
  Modal,
  TextInput,
  Textarea,
  Select,
  Group,
  Grid,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { GridCol as Col } from "@mantine/core";

interface JobPostModalProps {
  opened: boolean;
  onClose: () => void;
}

export function JobPostModal({ opened, onClose }: JobPostModalProps) {
  const form = useForm({
    initialValues: {
      jobTitle: "",
      companyName: "",
      location: "",
      jobType: "",
      salaryRange: "",
      jobDescription: "",
      requirements: "",
      responsibilities: "",
      applicationDeadline: null,
    },
  });

  const [value, setValue] = useState<Date | null>(null);

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Job Posting Form" size="lg">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid gutter="md">
          <Col span={6}>
            <TextInput
              label="Job Title"
              placeholder="Enter job title"
              {...form.getInputProps("jobTitle")}
              required
            />
          </Col>
          <Col span={6}>
            <TextInput
              label="Company Name"
              placeholder="Enter company name"
              {...form.getInputProps("companyName")}
              required
            />
          </Col>
          <Col span={6}>
            <TextInput
              label="Location"
              placeholder="Enter job location"
              {...form.getInputProps("location")}
              required
            />
          </Col>
          <Col span={6}>
            <Select
              label="Job Type"
              placeholder="Select job type"
              data={["Full-time", "Part-time", "Contract", "Internship"]}
              {...form.getInputProps("jobType")}
              required
            />
          </Col>
          <Col span={6}>
            <TextInput
              label="Salary Range"
              placeholder="Enter salary range"
              {...form.getInputProps("salaryRange")}
              required
            />
          </Col>
          <Col span={6}>
            <DatePickerInput
              label="Application Deadline"
              placeholder="Pick a date"
              value={value}
              onChange={setValue}
              style={{ width: "100%" }}
            />
          </Col>
        </Grid>

        <Textarea
          label="Job Description"
          placeholder="Enter job description"
          {...form.getInputProps("jobDescription")}
          required
          mt="md"
        />
        <Textarea
          label="Requirements"
          placeholder="Enter job requirements"
          {...form.getInputProps("requirements")}
          required
          mt="md"
        />
        <Textarea
          label="Responsibilities"
          placeholder="Enter job responsibilities"
          {...form.getInputProps("responsibilities")}
          required
          mt="md"
        />

        <Group justify="space-between" mt="md">
          <Button type="button" variant="outline" onClick={onClose}>
            Save Draft
          </Button>
          <Button type="submit" color="blue">
            Publish
          </Button>
        </Group>
      </form>
    </Modal>
  );
}
