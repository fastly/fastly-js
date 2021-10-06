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
 * The SchemasWafActiveRuleDataAttributes model module.
 * @module model/SchemasWafActiveRuleDataAttributes
 * @version 3.0.0-alpha1
 */
var SchemasWafActiveRuleDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SchemasWafActiveRuleDataAttributes</code>.
   * @alias module:model/SchemasWafActiveRuleDataAttributes
   */
  function SchemasWafActiveRuleDataAttributes() {
    _classCallCheck(this, SchemasWafActiveRuleDataAttributes);

    SchemasWafActiveRuleDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SchemasWafActiveRuleDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SchemasWafActiveRuleDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasWafActiveRuleDataAttributes} obj Optional instance to populate.
     * @return {module:model/SchemasWafActiveRuleDataAttributes} The populated <code>SchemasWafActiveRuleDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SchemasWafActiveRuleDataAttributes();

        if (data.hasOwnProperty('modsec_rule_id')) {
          obj['modsec_rule_id'] = _ApiClient["default"].convertToType(data['modsec_rule_id'], 'Number');
        }

        if (data.hasOwnProperty('revision')) {
          obj['revision'] = _ApiClient["default"].convertToType(data['revision'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SchemasWafActiveRuleDataAttributes;
}();
/**
 * The ModSecurity rule ID of the associated rule revision.
 * @member {Number} modsec_rule_id
 */


SchemasWafActiveRuleDataAttributes.prototype['modsec_rule_id'] = undefined;
/**
 * Revision number.
 * @member {Number} revision
 */

SchemasWafActiveRuleDataAttributes.prototype['revision'] = undefined;
/**
 * Describes the behavior for the particular rule revision within this firewall version.
 * @member {module:model/SchemasWafActiveRuleDataAttributes.StatusEnum} status
 */

SchemasWafActiveRuleDataAttributes.prototype['status'] = undefined;
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

SchemasWafActiveRuleDataAttributes['StatusEnum'] = {
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
var _default = SchemasWafActiveRuleDataAttributes;
exports["default"] = _default;