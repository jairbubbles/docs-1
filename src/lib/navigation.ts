type Subsection = {
  title: string;
  href: string;
};

type Section = {
  title: string;
  href: string;
  subsections?: Subsection[];
};

export type Topic = {
  title: string;
  href: string;
  sections?: Section[];
};

export type NavigationItem = {
  separator: string;
  topics: Topic[];
};

export const navigation: NavigationItem[] = [
  {
    separator: "Introduction",
    topics: [
      {
        title: "Getting Started",
        href: "/getting-started",
        sections: [
          { title: "Tour", href: "/getting-started/tour" },
          {
            title: "Cloud Instance", href: "/getting-started/cloud-instance",
            subsections: [
              { title: "Example", href: "/getting-started/cloud-instance/example", },
            ]
          },
        ],
      },
    ],
  },
  {
    separator: "Code AI",
    topics: [
      {
        title: "Cody",
        href: "/cody",
        sections: [
          { title: "Quickstart", href: "/cody/quickstart" },
          {
            title: "Cody Clients", href: "/cody/cody-clients",
            subsections: [
              { title: "Cody for VS Code", href: "/cody/cody-clients/install-vscode", },
              { title: "Cody for JetBrains", href: "/cody/cody-clients/install-jetbrains", },
              { title: "Cody for Neovim", href: "/cody/cody-clients/install-neovim", },
              { title: "Cody for Web App", href: "/cody/cody-clients/cody-with-sourcegraph", },
              { title: "Cody for Enterprise", href: "/cody/cody-clients/enable-cody-enterprise", },
              { title: "Feature Parity Reference", href: "/cody/cody-clients/feature-reference", },

            ]
          },
          {
            title: "Capabilities", href: "/cody/capabilities",
            subsections: [
              { title: "Chat", href: "/cody/capabilities/chat", },
              { title: "Autocomplete", href: "/cody/capabilities/autocomplete", },
              { title: "Commands", href: "/cody/capabilities/commands", },
              { title: "Debug Code", href: "/cody/capabilities/debug-code", },
            ]
          },
          {
            title: "Core Concepts", href: "/cody/core-concepts/context",
            subsections: [
              { title: "Context", href: "/cody/core-concepts/context", },
              { title: "Keyword Search", href: "/cody/core-concepts/keyword-search", },
              { title: "Code Graph", href: "/cody/core-concepts/code-graph", },
              { title: "Cody Gateway", href: "/cody/core-concepts/cody-gateway", },
            ]
          },
          {
            title: "Embeddings", href: "/cody/embeddings",
            subsections: [
              { title: "Generate Embeddings Index", href: "/cody/embeddings/embedding-index", },
              { title: "Configure Embeddings", href: "/cody/embeddings/configure-embeddings", },
              { title: "Manage Embeddings", href: "/cody/embeddings/manage-embeddings", },
              { title: "Usage and Limits", href: "/cody/embeddings/usage-and-limits", },
            ]
          },
          {
            title: "Use Cases", href: "/cody/use-cases/generate-unit-tests",
            subsections: [
              { title: "Generate Unit Tests", href: "/cody/use-cases/generate-unit-tests", },
              { title: "Build UI", href: "/cody/use-cases/build-ui", },
            ]
          },
          { title: "Usage and Pricing", href: "/cody/usage-and-pricing" },
          { title: "Troubleshooting", href: "/cody/troubleshooting" },
          { title: "FAQs", href: "/cody/faq" },
        ],
      },
      {
        title: "Code Search",
        href: "/code_search",
        sections: [
          { title: "Tutorials", href: "/code_search/tutorials" },
          { title: "How-to Guides", href: "/code_search/how-to" },
          { title: "Explanations", href: "/code_search/explanations" },
          { title: "Reference", href: "/code_search/reference" },
        ],
      },
    ],
  },
  {
    separator: "Code Management",
    topics: [
      {
        title: "Batch Changes",
        href: "/batch_changes",
        sections: [
          { title: "Quickstart", href: "/batch_changes/quickstart" },
          { title: "Explanations", href: "/batch_changes/explanations" },
          { title: "Tutorials", href: "/batch_changes/tutorials" },
          { title: "How-to Guides", href: "/batch_changes/how-tos" },
          { title: "Reference", href: "/batch_changes/references" },
        ],
      },
      {
        title: "Code Navigation",
        href: "/code_navigation",
        sections: [
          { title: "How-to Guides", href: "/code_navigation/how-to-guides" },
          { title: "Explanations", href: "/code_navigation/explanations" },
          { title: "Reference", href: "/code_navigation/reference" },
        ],
      },
      {
        title: "Code Monitoring",
        href: "/code_monitoring",
        sections: [
          { title: "Quickstart", href: "/code_monitoring/quickstart" },
          { title: "Explanations", href: "/code_monitoring/explanations" },
          { title: "How-to Guides", href: "/code_monitoring/how-to-guides" },
        ],
      },
      {
        title: "Code Ownership",
        href: "/own",
        sections: [
          { title: "CODEOWNERS Format", href: "/own/codeowners-format" },
          { title: "CODEOWNERS Ingestion", href: "/own/codeowners-ingestion" },
          {
            title: "Configuration Reference",
            href: "/own/configuration_reference",
          },
          { title: "Assigned Ownership", href: "/own/assigned_ownership" },
        ],
      },
      {
        title: "Code Insights",
        href: "/code_insights",
        sections: [
          { title: "Quickstart", href: "/code_insights/quickstart" },
          { title: "Explanations", href: "/code_insights/explanations" },
          { title: "How-to Guides", href: "/code_insights/how-to-guides" },
          { title: "Reference", href: "/code_insights/reference" },
        ],
      },
      {
        title: "Notebooks",
        href: "/notebooks",
        sections: [{ title: "Quickstart", href: "/notebooks/quickstart" }],
      },
    ],
  },
  {
    separator: "Platform",
    topics: [
      {
        title: "Sourcegraph Admin",
        href: "/admin",
        sections: [
          { title: "Deploy", href: "/admin/deploy" },
          { title: "Upgrade", href: "/admin/updates" },
          { title: "Configuration", href: "/admin/config" },
          { title: "Licensing", href: "/admin/licensing" },
          { title: "Codehosts", href: "/admin/external_service" },
          { title: "User Authentication", href: "/admin/auth" },
          { title: "Access Control", href: "/admin/access_control" },
          { title: "Repository Permissions", href: "/admin/permissions" },
          { title: "Observability", href: "/admin/observability" },
          { title: "Analytics", href: "/admin/analytics" },
          { title: "Executors", href: "/admin/executors" },
          { title: "FAQs", href: "/admin/faq" },
          { title: "Troubleshooting", href: "/admin/troubleshooting" },
          { title: "How-to Guides", href: "/admin/how-to" },
          {
            title: "Enterprise Getting Started",
            href: "/admin/enterprise_getting_started_guide",
          },
          { title: "Pricing", href: "/admin/pricing" },
        ],
      },
      {
        title: "Sourcegraph Cloud",
        href: "/cloud",
        sections: [
          { title: "Intro", href: "#" },
          { title: "Examples", href: "#" },
        ],
      },
      {
        title: "Integrations",
        href: "/integration",
        sections: [
          {
            title: "Browser Extension",
            href: "/integration/browser_extension",
          },
          { title: "Editors", href: "/integration/editor" },
          {
            title: "Browser Search Engine",
            href: "/integration/browser_extension/how-tos/browser_search_engine",
          },
        ],
      },
      {
        title: "Development",
        href: "/dev",
        sections: [
          { title: "Setup", href: "/dev/setup" },
          { title: "How-to Guides", href: "/dev/how-to" },
          { title: "Contributing", href: "/dev/contributing" },
        ],
      },
    ],
  },
  {
    separator: "CLI & API",
    topics: [
      {
        title: "Sourcegraph CLI",
        href: "/cli",
        sections: [
          { title: "Quickstart", href: "/cli/quickstart" },
          { title: "Explanations", href: "/cli/explanations" },
          { title: "How-to Guides", href: "/cli/how-tos" },
          { title: "References", href: "/cli/references" },
        ],
      },
      {
        title: "Sourcegraph GraphQL API",
        href: "/api/graphql",
        sections: [
          { title: "Intro", href: "#" },
          { title: "Examples", href: "#" },
        ],
      },
      {
        title: "Sourcegraph Stream API",
        href: "/api/stream_api",
        sections: [
          { title: "Intro", href: "#" },
          { title: "Examples", href: "#" },
        ],
      },
    ],
  },
  {
    separator: "Help & Support",
    topics: [
      {
        title: "SLAs & Premium Support",
        href: "/sla",
        sections: [
          { title: "Intro", href: "#" },
          { title: "Examples", href: "#" },
        ],
      },
      {
        title: "Support Center",
        href: "#",
        sections: [
          { title: "Intro", href: "#" },
          { title: "Examples", href: "#" },
        ],
      },
      {
        title: "Changelog",
        href: "/CHANGELOG",
        sections: [
          { title: "Intro", href: "#" },
          { title: "Examples", href: "#" },
        ],
      },
    ],
  },
];
