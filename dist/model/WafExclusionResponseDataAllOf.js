"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfrelationshipWafRulesrelationshipWafRuleRevisions = _interopRequireDefault(require("./AnyOfrelationshipWafRulesrelationshipWafRuleRevisions"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafExclusionResponseDataAllOf model module.
 * @module model/WafExclusionResponseDataAllOf
 * @version 3.0.0-alpha1
 */
var WafExclusionResponseDataAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafExclusionResponseDataAllOf</code>.
   * @alias module:model/WafExclusionResponseDataAllOf
   */
  function WafExclusionResponseDataAllOf() {
    _classCallCheck(this, WafExclusionResponseDataAllOf);

    WafExclusionResponseDataAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafExclusionResponseDataAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafExclusionResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/WafExclusionResponseDataAllOf} The populated <code>WafExclusionResponseDataAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafExclusionResponseDataAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _ApiClient["default"].convertToType(data['relationships'], _AnyOfrelationshipWafRulesrelationshipWafRuleRevisions["default"]);
        }
      }

      return obj;
    }
  }]);

  return WafExclusionResponseDataAllOf;
}();
/**
 * Alphanumeric string identifying a WAF exclusion.
 * @member {String} id
 */


WafExclusionResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

WafExclusionResponseDataAllOf.prototype['attributes'] = undefined;
/**
 * @member {module:model/AnyOfrelationshipWafRulesrelationshipWafRuleRevisions} relationships
 */

WafExclusionResponseDataAllOf.prototype['relationships'] = undefined;
var _default = WafExclusionResponseDataAllOf;
exports["default"] = _default;