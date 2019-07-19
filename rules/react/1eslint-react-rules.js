/*eslint react/display-name: "off"*/

/*eslint react/jsx-key: "error"*/
() => [].map(() => <a id={123} />);

/*eslint react/jsx-uses-react: "error"*/

/*eslint react/jsx-uses-vars: "error"*/

/*eslint react/no-direct-mutation-state: "error"*/
var Hello = createReactClass({
  fn: function() {
    this.state = {};
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

/*eslint react/no-string-refs: "error"*/
() => <div ref="asd"></div>;

/*eslint react/no-unescaped-entities: "error"*/
() => <div>></div>;

/*eslint react/no-unknown-property: "error"*/
() => <div class="foo" />;

/*eslint react/no-unsafe: "off"*/
class Hello2 extends React.Component {
  UNSAFE_componentWillMount() {}
}

/*eslint react/prop-types: ["error", { ignore: ['children', 'className', 'style'] }]*/
({ children, className, style }) => <div className={className} style={style}>{children}</div>;

/*eslint react/react-in-jsx-scope: "error"*/
// import React from 'react';

/*eslint react/require-render-return: "error"*/
class Hello3 extends React.Component {
  render() {}
}

/*eslint react/jsx-no-comment-textnodes: "error"*/
/*eslint react/jsx-no-target-blank: "error"*/
/*eslint react/jsx-no-undef: "error"*/

/*eslint react/no-children-prop: "error"*/
/*eslint react/no-danger-with-children: "error"*/


/*eslint react/no-deprecated: "off"*/
/*eslint react/no-find-dom-node: "error"*/
/*eslint react/no-is-mounted: "error"*/
/*eslint react/no-render-return-value: "error"*/

