/*eslint react/jsx-equals-spacing: "error"*/
() => <a id = {123} />;

/*eslint react/jsx-no-duplicate-props: "error" */
() => <a id="a" id="b" />;

/*eslint react/jsx-props-no-multi-spaces: "error" */
() => <a  id="a" />;

/*eslint react/jsx-tag-spacing: "error" */
() => <a id="a"/>;

/*eslint react/no-did-mount-set-state: "error" */
/*eslint react/no-did-update-set-state: "error" */
var Hello = createReactClass({
  componentDidMount: function() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  },
  componentDidUpdate: function() {
    this.setState({
       name: this.props.name.toUpperCase()
     });
  },
  render: function() {
    return <div>Hello {this.state.name}</div>;
  }
});

/*eslint react/prefer-stateless-function: "error" */
class Hello2 extends React.Component {}

/*eslint react/require-default-props: "error" */

/*eslint react/self-closing-comp: "error" */
() => <img></img>;

/*eslint react/sort-comp: ["error", {
  order: [
    'static-methods',
    'lifecycle',
    'everything-else',
    'render'
  ],
  groups: {
    lifecycle: [
      'displayName',
      'propTypes',
      'contextTypes',
      'childContextTypes',
      'mixins',
      'statics',
      'defaultProps',
      'constructor',
      'getDefaultProps',
      'state',
      'getInitialState',
      'getChildContext',
      'getDerivedStateFromProps',
      'componentWillMount',
      'UNSAFE_componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'UNSAFE_componentWillReceiveProps',
      'shouldComponentUpdate',
      'componentWillUpdate',
      'UNSAFE_componentWillUpdate',
      'getSnapshotBeforeUpdate',
      'componentDidUpdate',
      'componentDidCatch',
      'componentWillUnmount'
    ]
  }
}] */
class Hello3 extends React.Component {
  componentWillUpdate() {}
  componentDidMount() {}
}

/*eslint react/style-prop-object: "error" */
() => <a style="color: red;" />;

/*eslint react/void-dom-elements-no-children: "error" */
() => <img>children</img>;