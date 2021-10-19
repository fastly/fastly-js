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
 * The WafRuleRevisionAttributes model module.
 * @module model/WafRuleRevisionAttributes
 * @version 3.0.0-alpha1
 */
var WafRuleRevisionAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRuleRevisionAttributes</code>.
   * @alias module:model/WafRuleRevisionAttributes
   */
  function WafRuleRevisionAttributes() {
    _classCallCheck(this, WafRuleRevisionAttributes);

    WafRuleRevisionAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRuleRevisionAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRuleRevisionAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleRevisionAttributes} obj Optional instance to populate.
     * @return {module:model/WafRuleRevisionAttributes} The populated <code>WafRuleRevisionAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRuleRevisionAttributes();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('modsec_rule_id')) {
          obj['modsec_rule_id'] = _ApiClient["default"].convertToType(data['modsec_rule_id'], 'Number');
        }

        if (data.hasOwnProperty('paranoia_level')) {
          obj['paranoia_level'] = _ApiClient["default"].convertToType(data['paranoia_level'], 'Number');
        }

        if (data.hasOwnProperty('revision')) {
          obj['revision'] = _ApiClient["default"].convertToType(data['revision'], 'Number');
        }

        if (data.hasOwnProperty('severity')) {
          obj['severity'] = _ApiClient["default"].convertToType(data['severity'], 'Number');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('vcl')) {
          obj['vcl'] = _ApiClient["default"].convertToType(data['vcl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WafRuleRevisionAttributes;
}();
/**
 * Message metadata for the rule.
 * @member {String} message
 */


WafRuleRevisionAttributes.prototype['message'] = undefined;
/**
 * Corresponding ModSecurity rule ID.
 * @member {Number} modsec_rule_id
 */

WafRuleRevisionAttributes.prototype['modsec_rule_id'] = undefined;
/**
 * Paranoia level for the rule.
 * @member {Number} paranoia_level
 */

WafRuleRevisionAttributes.prototype['paranoia_level'] = undefined;
/**
 * Revision number.
 * @member {Number} revision
 */

WafRuleRevisionAttributes.prototype['revision'] = undefined;
/**
 * Severity metadata for the rule.
 * @member {Number} severity
 */

WafRuleRevisionAttributes.prototype['severity'] = undefined;
/**
 * The ModSecurity rule logic.
 * @member {String} source
 */

WafRuleRevisionAttributes.prototype['source'] = undefined;
/**
 * The state, indicating if the revision is the most recent version of the rule.
 * @member {module:model/WafRuleRevisionAttributes.StateEnum} state
 */

WafRuleRevisionAttributes.prototype['state'] = undefined;
/**
 * The VCL representation of the rule logic.
 * @member {String} vcl
 */

WafRuleRevisionAttributes.prototype['vcl'] = undefined;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

WafRuleRevisionAttributes['StateEnum'] = {
  /**
   * value: "latest"
   * @const
   */
  "latest": "latest",

  /**
   * value: "outdated"
   * @const
   */
  "outdated": "outdated"
};
var _default = WafRuleRevisionAttributes;
exports["default"] = _default;