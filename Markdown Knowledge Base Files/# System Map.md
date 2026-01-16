\# System Map

\`\`\`mermaid  
flowchart TD  
  A\[Winning the Circle\] \--\> B\[Boundary Trigger\]

  B \--\> C\[Wall Control\]  
  B \--\> D\[Open Space Control\]

  C \--\> E\[Wall Escape\]  
  C \--\> F\[Wall Pin \-\> Ground Control\]

  F \--\> G\[Wall Stand-Up Loop\]

  X\[DNS\] \-.applies across.-\> C  
  X \-.applies across.-\> D  
  X \-.applies across.-\> F

  Y\[TKO Pin\] \-.emerges in.-\> F  
  Y \-.emerges in.-\> G  
