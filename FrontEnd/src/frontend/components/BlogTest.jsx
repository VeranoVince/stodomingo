import React from "react";
import { Container, Grid, SimpleGrid, rem } from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(300);

function BlogTest() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <img
          src="/Header.png"
          alt="Primary Image"
          style={{
            width: "100%",
            height: PRIMARY_COL_HEIGHT,
            borderRadius: "8px",
          }}
        />
        <Grid gutter="md">
          <Grid.Col>
            <img
              src="/Header.png"
              alt="Secondary Image 1"
              style={{
                width: "100%",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "8px",
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <img
              src="/Header.png"
              alt="Secondary Image 2"
              style={{
                width: "100%",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "8px",
              }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <img
              src="/Header.png" // Replace with the path to your secondary image 3
              alt="Secondary Image 3"
              style={{
                width: "100%",
                height: SECONDARY_COL_HEIGHT,
                borderRadius: "8px",
              }}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

export default BlogTest;
