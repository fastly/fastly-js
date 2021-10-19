"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafRule = _interopRequireDefault(require("./TypeWafRule"));

var _WafRuleAttributes = _interopRequireDefault(require("./WafRuleAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRule model module.
 * @module model/WafRule
 * @version 3.0.0-alpha1
 */
var WafRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRule</code>.
   * @alias module:model/WafRule
   */
  function WafRule() {
    _classCallCheck(this, WafRule);

    WafRule.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRule, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRule} obj Optional instance to populate.
     * @return {module:model/WafRule} The populated <code>WafRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRule();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafRuleAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafRule["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return WafRule;
}();
/**
 * @member {module:model/WafRuleAttributes} attributes
 */


WafRule.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule.
 * @member {String} id
 */

WafRule.prototype['id'] = undefined;
/**
 * @member {module:model/TypeWafRule} type
 */

WafRule.prototype['type'] = undefined;
var _default = WafRule;
exports["default"] = _default;