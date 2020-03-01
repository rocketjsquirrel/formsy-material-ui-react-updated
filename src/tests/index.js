import React from 'react';
import TestUtils from 'react-addons-test-utils';
//import PureRenderMixin from 'react-addons-pure-render-mixin';
//import sinon from 'sinon';

import Formsy from 'formsy-react';
import TestInput, { InputFactory } from './utils/TestInput';
import immediate from './utils/immediate';

export default {
  'should return passed and setValue() value when using value': function(test) {
    const form = TestUtils.renderIntoDocument(
      <Formsy.Form>
        <TestInput name="foo" value="foo" />
      </Formsy.Form>,
    );

    const input = TestUtils.findRenderedDOMComponentWithTag(form, 'INPUT');
    test.equal(input.value, 'foo');
    TestUtils.Simulate.change(input, { target: { value: 'foobar' } });
    test.equal(input.value, 'foobar');

    test.done();
  },
};
