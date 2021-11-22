"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfrelationshipWafRulesrelationshipWafRuleRevisions = _interopRequireDefault(require("./AnyOfrelationshipWafRulesrelationshipWafRuleRevisions"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TypeWafExclusion = _interopRequireDefault(require("./TypeWafExclusion"));

var _WafExclusionData = _interopRequireDefault(require("./WafExclusionData"));

var _WafExclusionResponseDataAllOf = _interopRequireDefault(require("./WafExclusionResponseDataAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafExclusionResponseData model module.
 * @module model/WafExclusionResponseData
 * @version 3.0.0-alpha1
 */
var WafExclusionResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafExclusionResponseData</code>.
   * @alias module:model/WafExclusionResponseData
   * @implements module:model/WafExclusionData
   * @implements module:model/WafExclusionResponseDataAllOf
   */
  function WafExclusionResponseData() {
    _classCallCheck(this, WafExclusionResponseData);

    _WafExclusionData["default"].initialize(this);

    _WafExclusionResponseDataAllOf["default"].initialize(this);

    WafExclusionResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafExclusionResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafExclusionResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionResponseData} obj Optional instance to populate.
     * @return {module:model/WafExclusionResponseData} The populated <code>WafExclusionResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafExclusionResponseData();

        _WafExclusionData["default"].constructFromObject(data, obj);

        _WafExclusionResponseDataAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafExclusion["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _ApiClient["default"].convertToType(data['relationships'], _AnyOfrelationshipWafRulesrelationshipWafRuleRevisions["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WafExclusionResponseData;
}();
/**
 * @member {module:model/TypeWafExclusion} type
 */


WafExclusionResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

WafExclusionResponseData.prototype['attributes'] = undefined;
/**
 * @member {module:model/AnyOfrelationshipWafRulesrelationshipWafRuleRevisions} relationships
 */

WafExclusionResponseData.prototype['relationships'] = undefined;
/**
 * Alphanumeric string identifying a WAF exclusion.
 * @member {String} id
 */

WafExclusionResponseData.prototype['id'] = undefined; // Implement WafExclusionData interface:

/**
 * @member {module:model/TypeWafExclusion} type
 */

_WafExclusionData["default"].prototype['type'] = undefined;
/**
 * @member {module:model/WafExclusionDataAttributes} attributes
 */

_WafExclusionData["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForWafExclusion} relationships
 */

_WafExclusionData["default"].prototype['relationships'] = undefined; // Implement WafExclusionResponseDataAllOf interface:

/**
 * Alphanumeric string identifying a WAF exclusion.
 * @member {String} id
 */

_WafExclusionResponseDataAllOf["default"].prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

_WafExclusionResponseDataAllOf["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/AnyOfrelationshipWafRulesrelationshipWafRuleRevisions} relationships
 */

_WafExclusionResponseDataAllOf["default"].prototype['relationships'] = undefined;
var _default = WafExclusionResponseData;
exports["default"] = _default;