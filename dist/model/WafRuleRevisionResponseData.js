"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafRule = _interopRequireDefault(require("./RelationshipWafRule"));

var _TypeWafRuleRevision = _interopRequireDefault(require("./TypeWafRuleRevision"));

var _WafRuleRevision = _interopRequireDefault(require("./WafRuleRevision"));

var _WafRuleRevisionAttributes = _interopRequireDefault(require("./WafRuleRevisionAttributes"));

var _WafRuleRevisionResponseDataAllOf = _interopRequireDefault(require("./WafRuleRevisionResponseDataAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRuleRevisionResponseData model module.
 * @module model/WafRuleRevisionResponseData
 * @version 3.0.0-alpha1
 */
var WafRuleRevisionResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRuleRevisionResponseData</code>.
   * @alias module:model/WafRuleRevisionResponseData
   */
  function WafRuleRevisionResponseData() {
    _classCallCheck(this, WafRuleRevisionResponseData);

    WafRuleRevisionResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRuleRevisionResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRuleRevisionResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleRevisionResponseData} obj Optional instance to populate.
     * @return {module:model/WafRuleRevisionResponseData} The populated <code>WafRuleRevisionResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRuleRevisionResponseData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafRuleRevisionAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafRuleRevision["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipWafRule["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return WafRuleRevisionResponseData;
}();
/**
 * @member {module:model/WafRuleRevisionAttributes} attributes
 */


WafRuleRevisionResponseData.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a WAF rule revision.
 * @member {String} id
 */

WafRuleRevisionResponseData.prototype['id'] = undefined;
/**
 * @member {module:model/TypeWafRuleRevision} type
 */

WafRuleRevisionResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/RelationshipWafRule} relationships
 */

WafRuleRevisionResponseData.prototype['relationships'] = undefined;
var _default = WafRuleRevisionResponseData;
exports["default"] = _default;