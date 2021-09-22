"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForWafRule = _interopRequireDefault(require("./RelationshipsForWafRule"));

var _TypeWafRule = _interopRequireDefault(require("./TypeWafRule"));

var _WafRule = _interopRequireDefault(require("./WafRule"));

var _WafRuleAttributes = _interopRequireDefault(require("./WafRuleAttributes"));

var _WafRuleResponseDataAllOf = _interopRequireDefault(require("./WafRuleResponseDataAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRuleResponseData model module.
 * @module model/WafRuleResponseData
 * @version 3.0.0-alpha1
 */
var WafRuleResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRuleResponseData</code>.
   * @alias module:model/WafRuleResponseData
   */
  function WafRuleResponseData() {
    _classCallCheck(this, WafRuleResponseData);

    WafRuleResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRuleResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRuleResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleResponseData} obj Optional instance to populate.
     * @return {module:model/WafRuleResponseData} The populated <code>WafRuleResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRuleResponseData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafRuleAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafRule["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForWafRule["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return WafRuleResponseData;
}();
/**
 * @member {module:model/WafRuleAttributes} attributes
 */


WafRuleResponseData.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule.
 * @member {String} id
 */

WafRuleResponseData.prototype['id'] = undefined;
/**
 * @member {module:model/TypeWafRule} type
 */

WafRuleResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/RelationshipsForWafRule} relationships
 */

WafRuleResponseData.prototype['relationships'] = undefined;
var _default = WafRuleResponseData;
exports["default"] = _default;