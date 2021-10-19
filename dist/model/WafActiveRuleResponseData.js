"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForWafActiveRule = _interopRequireDefault(require("./RelationshipsForWafActiveRule"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TypeWafActiveRule = _interopRequireDefault(require("./TypeWafActiveRule"));

var _WafActiveRuleData = _interopRequireDefault(require("./WafActiveRuleData"));

var _WafActiveRuleResponseDataAllOf = _interopRequireDefault(require("./WafActiveRuleResponseDataAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafActiveRuleResponseData model module.
 * @module model/WafActiveRuleResponseData
 * @version 3.0.0-alpha1
 */
var WafActiveRuleResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafActiveRuleResponseData</code>.
   * @alias module:model/WafActiveRuleResponseData
   */
  function WafActiveRuleResponseData() {
    _classCallCheck(this, WafActiveRuleResponseData);

    WafActiveRuleResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafActiveRuleResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafActiveRuleResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleResponseData} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleResponseData} The populated <code>WafActiveRuleResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafActiveRuleResponseData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForWafActiveRule["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafActiveRule["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WafActiveRuleResponseData;
}();
/**
 * @member {module:model/Timestamps} attributes
 */


WafActiveRuleResponseData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForWafActiveRule} relationships
 */

WafActiveRuleResponseData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeWafActiveRule} type
 */

WafActiveRuleResponseData.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF active rule.
 * @member {String} id
 */

WafActiveRuleResponseData.prototype['id'] = undefined;
var _default = WafActiveRuleResponseData;
exports["default"] = _default;