const React = require('react');

/*#eslint react/jsx-key: "error"*/
() => [].map(() => <a id={123} />);

/*#eslint react/no-string-refs: "error"*/
() => <div ref="asd"></div>;

/*#eslint react/no-unescaped-entities: "error"*/
() => <div>></div>;

/*#eslint react/no-unknown-property: "error"*/
() => <div class="foo" />;

/*#eslint react/no-unsafe: "off"*/
class Hello2 extends React.Component {
  UNSAFE_componentWillMount() {}
}

/*#eslint react/prop-types: ["error", { ignore: ['children', 'className', 'style'] }]*/
({ children, className, style }) => <div className={className} style={style}>{children}</div>;

/*#eslint react/require-render-return: "error"*/
class Hello3 extends React.Component {
  render() {}
}
