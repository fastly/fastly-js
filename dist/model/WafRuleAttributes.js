"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRuleAttributes model module.
 * @module model/WafRuleAttributes
 * @version 3.0.0-alpha1
 */
var WafRuleAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRuleAttributes</code>.
   * @alias module:model/WafRuleAttributes
   */
  function WafRuleAttributes() {
    _classCallCheck(this, WafRuleAttributes);

    WafRuleAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRuleAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRuleAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleAttributes} obj Optional instance to populate.
     * @return {module:model/WafRuleAttributes} The populated <code>WafRuleAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRuleAttributes();

        if (data.hasOwnProperty('modsec_rule_id')) {
          obj['modsec_rule_id'] = _ApiClient["default"].convertToType(data['modsec_rule_id'], 'Number');
        }

        if (data.hasOwnProperty('publisher')) {
          obj['publisher'] = _ApiClient["default"].convertToType(data['publisher'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WafRuleAttributes;
}();
/**
 * Corresponding ModSecurity rule ID.
 * @member {Number} modsec_rule_id
 */


WafRuleAttributes.prototype['modsec_rule_id'] = undefined;
/**
 * Rule publisher.
 * @member {module:model/WafRuleAttributes.PublisherEnum} publisher
 */

WafRuleAttributes.prototype['publisher'] = undefined;
/**
 * The rule's [type](https://docs.fastly.com/en/guides/managing-rules-on-the-fastly-waf#understanding-the-types-of-rules).
 * @member {module:model/WafRuleAttributes.TypeEnum} type
 */

WafRuleAttributes.prototype['type'] = undefined;
/**
 * Allowed values for the <code>publisher</code> property.
 * @enum {String}
 * @readonly
 */

WafRuleAttributes['PublisherEnum'] = {
  /**
   * value: "fastly"
   * @const
   */
  "fastly": "fastly",

  /**
   * value: "trustwave"
   * @const
   */
  "trustwave": "trustwave",

  /**
   * value: "owasp"
   * @const
   */
  "owasp": "owasp"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

WafRuleAttributes['TypeEnum'] = {
  /**
   * value: "strict"
   * @const
   */
  "strict": "strict",

  /**
   * value: "score"
   * @const
   */
  "score": "score",

  /**
   * value: "threshold"
   * @const
   */
  "threshold": "threshold"
};
var _default = WafRuleAttributes;
exports["default"] = _default;