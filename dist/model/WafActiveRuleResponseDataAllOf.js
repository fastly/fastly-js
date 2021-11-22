"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfrelationshipWafFirewallVersionrelationshipWafRuleRevision = _interopRequireDefault(require("./AnyOfrelationshipWafFirewallVersionrelationshipWafRuleRevision"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafActiveRuleResponseDataAllOf model module.
 * @module model/WafActiveRuleResponseDataAllOf
 * @version 3.0.0-alpha1
 */
var WafActiveRuleResponseDataAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafActiveRuleResponseDataAllOf</code>.
   * @alias module:model/WafActiveRuleResponseDataAllOf
   */
  function WafActiveRuleResponseDataAllOf() {
    _classCallCheck(this, WafActiveRuleResponseDataAllOf);

    WafActiveRuleResponseDataAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafActiveRuleResponseDataAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafActiveRuleResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleResponseDataAllOf} The populated <code>WafActiveRuleResponseDataAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafActiveRuleResponseDataAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _ApiClient["default"].convertToType(data['relationships'], _AnyOfrelationshipWafFirewallVersionrelationshipWafRuleRevision["default"]);
        }
      }

      return obj;
    }
  }]);

  return WafActiveRuleResponseDataAllOf;
}();
/**
 * Alphanumeric string identifying a WAF active rule.
 * @member {String} id
 */


WafActiveRuleResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

WafActiveRuleResponseDataAllOf.prototype['attributes'] = undefined;
/**
 * @member {module:model/AnyOfrelationshipWafFirewallVersionrelationshipWafRuleRevision} relationships
 */

WafActiveRuleResponseDataAllOf.prototype['relationships'] = undefined;
var _default = WafActiveRuleResponseDataAllOf;
exports["default"] = _default;