YUI.add('primrose-suite', function (Y) { 

  /**
  A Suite defines a `describe` block

  @class Suite
  @namespace Primrose
  @extends BaseCore
  @constructor
  **/
  Y.namespace('Primrose').Suite = Y.Base.create('primrose:suite',
    Y.BaseCore,
    [],
  {

    /**
    add a spec or a suite to the suite

    @method add
    @param {Primrose.Spec|Primrose.Suite} specOrSuite
    **/
    add: function (specOrSuite) {
      this.get('children').push(specOrSuite);
      
      this.get(
        specOrSuite.isSuite() ? 'suite' : 'spec'
      ).push(specOrSuite);
    },

    /**
    run the suite and children

    @method run
    **/
    run: function () {
      Y.Array.each(this.get('children'), function (child) {
        child.run();
      });
    }

  },
  {

    ATTRS: {

      /**
      @attribute description
      @type {String}
      **/
      description: {},

      /**
      @attribute specs
      @type {Array[Primrose.Spec]}
      **/
      specs: {
        value: []
      },

      /**
      @attribute suites
      @type {Array[Primrose.Suite]}
      **/
      suites: {
        value: []
      },

      /**
      @attribute children
      @type {Array[Primrose.Spec|Primrose.Suite]}
      **/
      children: {
        value: []
      }

    }

 
  });

},
'0.0.1',
{
  requires: [
    'base',
    'primrose-spec'
  ]
});
