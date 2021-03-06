// https://github.com/facebook/react/issues/3721
// http://stackoverflow.com/questions/31459720/how-to-test-decorated-react-component-with-shallow-rendering
// https://jamesfriend.com.au/better-assertions-shallow-rendered-react-components
// https://facebook.github.io/react/docs/test-utils.html#shallow-rendering
// https://github.com/airbnb/enzyme/issues/144
// https://github.com/airbnb/enzyme/issues/465
// https://github.com/airbnb/enzyme/pull/318
// https://github.com/reactjs/core-notes/blob/master/2016-05/may-12.md#snapshot-testing
// https://github.com/airbnb/enzyme/pull/342
// https://github.com/yahoo/react-intl/issues/170#issuecomment-152083068
// http://airbnb.io/enzyme/docs/api/ShallowWrapper/setContext.html
// https://github.com/callemall/material-ui/issues/1428
// https://codedump.io/share/Zrf49AcnSLJ1/1/uncaught-referenceerror-react-is-not-defined
//
// https://github.com/apollostack/react-apollo/issues/72
// http://stackoverflow.com/questions/34834494/component-undefined-react-router
import React from 'react'
import {mount} from 'enzyme'
import AppRoot from '../src/plugins/app/AppRoot'
import {expect} from 'chai'
import driver from '../src/core/init'
driver()

describe('run our app with enzyme in jsdom', () => {
  var wrapper
  beforeEach(done => {
    wrapper = mount(<AppRoot />)
    done()
  })

  describe('test wrapper with router', () => {
    it('should be a default route', (done) => {
      expect(wrapper.html()).to.contain('Not found')
      done()
    })
  })

})
