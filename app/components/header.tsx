import { Button } from "@mantine/core";
import { useState } from "react";
import Link from "next/link";
import { Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { JobPostModal } from "./JobPostModal"; // Import the modal component
import classes from "./css/HeaderSimple.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/findjobs", label: "  Find Jobs" },
  { link: "/findtalents", label: "Find Talents" },
  { link: "/About Us", label: "About Us" },
  { link: "/testimonials", label: "Testimonials" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [modalOpened, setModalOpened] = useState(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </Link>
  ));

  const handleModalOpen = () => setModalOpened(true);
  const handleModalClose = () => setModalOpened(false);

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href="/">
          <Image
            src="/assets/images/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>

        <Group gap={8} visibleFrom="xs">
          {items}
        </Group>

        <Button
          variant="gradient"
          gradient={{ from: 'rgba(182, 79, 255, 1)', to: 'rgba(110, 0, 189, 1)', deg: 176 }}
          radius="xl"
          onClick={handleModalOpen} // Open modal on click
        >
          Create Job
        </Button>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>

      {/* Job Post Modal */}
      <JobPostModal opened={modalOpened} onClose={handleModalClose} />
    </header>
  );
}
