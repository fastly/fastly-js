"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _OneOfnumberstring = _interopRequireDefault(require("./OneOfnumberstring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafActiveRuleDataAttributes model module.
 * @module model/WafActiveRuleDataAttributes
 * @version 3.0.0-alpha1
 */
var WafActiveRuleDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafActiveRuleDataAttributes</code>.
   * @alias module:model/WafActiveRuleDataAttributes
   */
  function WafActiveRuleDataAttributes() {
    _classCallCheck(this, WafActiveRuleDataAttributes);

    WafActiveRuleDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafActiveRuleDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafActiveRuleDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleDataAttributes} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleDataAttributes} The populated <code>WafActiveRuleDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafActiveRuleDataAttributes();

        if (data.hasOwnProperty('modsec_rule_id')) {
          obj['modsec_rule_id'] = _ApiClient["default"].convertToType(data['modsec_rule_id'], 'Number');
        }

        if (data.hasOwnProperty('revision')) {
          obj['revision'] = _ApiClient["default"].convertToType(data['revision'], _OneOfnumberstring["default"]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WafActiveRuleDataAttributes;
}();
/**
 * The ModSecurity rule ID of the associated rule revision.
 * @member {Number} modsec_rule_id
 */


WafActiveRuleDataAttributes.prototype['modsec_rule_id'] = undefined;
/**
 * @member {module:model/OneOfnumberstring} revision
 */

WafActiveRuleDataAttributes.prototype['revision'] = undefined;
/**
 * Describes the behavior for the particular rule revision within this firewall version.
 * @member {module:model/WafActiveRuleDataAttributes.StatusEnum} status
 */

WafActiveRuleDataAttributes.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

WafActiveRuleDataAttributes['StatusEnum'] = {
  /**
   * value: "log"
   * @const
   */
  "log": "log",

  /**
   * value: "block"
   * @const
   */
  "block": "block",

  /**
   * value: "score"
   * @const
   */
  "score": "score"
};
var _default = WafActiveRuleDataAttributes;
exports["default"] = _default;