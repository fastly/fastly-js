"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafActiveRuleItem = _interopRequireDefault(require("./IncludedWithWafActiveRuleItem"));

var _WafActiveRuleResponseData = _interopRequireDefault(require("./WafActiveRuleResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafActiveRulesResponseAllOf model module.
 * @module model/WafActiveRulesResponseAllOf
 * @version 3.0.0-alpha1
 */
var WafActiveRulesResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafActiveRulesResponseAllOf</code>.
   * @alias module:model/WafActiveRulesResponseAllOf
   */
  function WafActiveRulesResponseAllOf() {
    _classCallCheck(this, WafActiveRulesResponseAllOf);

    WafActiveRulesResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafActiveRulesResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafActiveRulesResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRulesResponseAllOf} obj Optional instance to populate.
     * @return {module:model/WafActiveRulesResponseAllOf} The populated <code>WafActiveRulesResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafActiveRulesResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafActiveRuleResponseData["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_IncludedWithWafActiveRuleItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafActiveRulesResponseAllOf;
}();
/**
 * @member {Array.<module:model/WafActiveRuleResponseData>} data
 */


WafActiveRulesResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafActiveRuleItem>} included
 */

WafActiveRulesResponseAllOf.prototype['included'] = undefined;
var _default = WafActiveRulesResponseAllOf;
exports["default"] = _default;