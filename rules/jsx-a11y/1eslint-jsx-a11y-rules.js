// no-interactive-element-to-noninteractive-role
// no-noninteractive-element-interactions
// no-noninteractive-element-to-interactive-role
// no-noninteractive-tabindex
// no-static-element-interactions
// scope

/*eslint jsx-a11y/accessible-emoji: "error"*/
() => <span role="img" aria-label="Panda">🐼</span>;

/*eslint jsx-a11y/alt-text: "error"*/
() => <img alt="" />;

/*eslint jsx-a11y/anchor-has-content: "error"*/
/*eslint jsx-a11y/anchor-is-valid: "error"*/
() => <a href="/">123</a>;