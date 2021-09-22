"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForWafRule = _interopRequireDefault(require("./RelationshipsForWafRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRuleResponseDataAllOf model module.
 * @module model/WafRuleResponseDataAllOf
 * @version 3.0.0-alpha1
 */
var WafRuleResponseDataAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRuleResponseDataAllOf</code>.
   * @alias module:model/WafRuleResponseDataAllOf
   */
  function WafRuleResponseDataAllOf() {
    _classCallCheck(this, WafRuleResponseDataAllOf);

    WafRuleResponseDataAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRuleResponseDataAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRuleResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/WafRuleResponseDataAllOf} The populated <code>WafRuleResponseDataAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRuleResponseDataAllOf();

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForWafRule["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return WafRuleResponseDataAllOf;
}();
/**
 * @member {module:model/RelationshipsForWafRule} relationships
 */


WafRuleResponseDataAllOf.prototype['relationships'] = undefined;
var _default = WafRuleResponseDataAllOf;
exports["default"] = _default;