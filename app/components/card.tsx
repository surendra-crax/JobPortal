import { TextInput, Select, RangeSlider, Grid, Container, Divider } from '@mantine/core';
import { useState } from 'react';
import { IconSearch, IconMapPin, IconBriefcase } from '@tabler/icons-react';

export default function JobFilters() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState<string | null>(null);
  const [jobType, setJobType] = useState<string | null>(null);
  const [salary, setSalary] = useState<[number, number]>([30000, 100000]);

  return (
    <Container size="xl" my={20}>
      <Grid gutter="md" grow align="center">
        {/* Search Box */}
        <Grid.Col span={2}>
          <TextInput
            leftSection={<IconSearch size={16} />}
            placeholder="Search jobs..."
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            className="border-none shadow-none bg-transparent"
          />
        </Grid.Col>
        <Divider orientation="vertical" size="xs" color="gray" className="h-8" />
        
        {/* Location Filter */}
        <Grid.Col span={2}>
          <Select
            leftSection={<IconMapPin size={16} />}
            placeholder="Filter by location"
            data={["New York", "Los Angeles", "Chicago", "San Francisco"]}
            value={location}
            onChange={(value) => setLocation(value)}
            className="border-none shadow-none bg-transparent"
          />
        </Grid.Col>
        <Divider orientation="vertical" size="xs" color="gray" className="h-8" />
        
        {/* Job Type Filter */}
        <Grid.Col span={2}>
          <Select
            leftSection={<IconBriefcase size={16} />}
            placeholder="Filter by job type"
            data={["Full-time", "Part-time", "Contract", "Internship"]}
            value={jobType}
            onChange={(value) => setJobType(value)}
            className="border-none shadow-none bg-transparent"
          />
        </Grid.Col>
        <Divider orientation="vertical" size="xs" color="gray" className="h-8" />
        
        {/* Salary Range Filter */}
        <Grid.Col span={2}>
          <RangeSlider
            min={20000}
            max={150000}
            step={5000}
            value={salary}
            onChange={setSalary}
            marks={[{ value: 20000, label: '$20k' }, { value: 150000, label: '$150k' }]}
            className="border-none shadow-none bg-transparent"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
