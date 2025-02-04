// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  chaptersSidebar: [
    {
      type: 'category',
      label: '📝 Chapter Notes',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'summaries/intro' }, // Ensure 'summaries/intro.md' exists
      items: [
        {
          type: 'doc',
          id: 'summaries/ch1',  // Ensure 'docs/summaries/ch1.md' exists!
          label: 'Chapter 1',
        },
        {
          type: 'doc',
          id: 'summaries/ch3',  // Ensure 'docs/summaries/ch3.md' exists!
          label: 'Chapter 3',
        },
        {
          type: 'doc',
          id: 'summaries/ch6',  // Ensure 'docs/summaries/ch6.md' exists!
          label: 'Chapter 6',
        },
      ],
    },
    {
      type: 'category',
      label: '🔍 Extra Material',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'practice/practice-questions', // ✅ Remove `/practice/`
          label: '❓ Practice Questions',
        },
      ],
    },
  ],
  
};

export default sidebars;
