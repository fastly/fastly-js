"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafActiveRules = _interopRequireDefault(require("./RelationshipWafActiveRules"));

var _RelationshipWafActiveRulesWafActiveRules = _interopRequireDefault(require("./RelationshipWafActiveRulesWafActiveRules"));

var _RelationshipWafFirewallVersionWafFirewallVersion = _interopRequireDefault(require("./RelationshipWafFirewallVersionWafFirewallVersion"));

var _RelationshipWafFirewallVersions = _interopRequireDefault(require("./RelationshipWafFirewallVersions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipsForWafFirewallVersion model module.
 * @module model/RelationshipsForWafFirewallVersion
 * @version 3.0.0-alpha1
 */
var RelationshipsForWafFirewallVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipsForWafFirewallVersion</code>.
   * @alias module:model/RelationshipsForWafFirewallVersion
   * @implements module:model/RelationshipWafFirewallVersions
   * @implements module:model/RelationshipWafActiveRules
   */
  function RelationshipsForWafFirewallVersion() {
    _classCallCheck(this, RelationshipsForWafFirewallVersion);

    _RelationshipWafFirewallVersions["default"].initialize(this);

    _RelationshipWafActiveRules["default"].initialize(this);

    RelationshipsForWafFirewallVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipsForWafFirewallVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipsForWafFirewallVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForWafFirewallVersion} obj Optional instance to populate.
     * @return {module:model/RelationshipsForWafFirewallVersion} The populated <code>RelationshipsForWafFirewallVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipsForWafFirewallVersion();

        _RelationshipWafFirewallVersions["default"].constructFromObject(data, obj);

        _RelationshipWafActiveRules["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('waf_firewall_versions')) {
          obj['waf_firewall_versions'] = _RelationshipWafFirewallVersionWafFirewallVersion["default"].constructFromObject(data['waf_firewall_versions']);
        }

        if (data.hasOwnProperty('waf_active_rules')) {
          obj['waf_active_rules'] = _RelationshipWafActiveRulesWafActiveRules["default"].constructFromObject(data['waf_active_rules']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipsForWafFirewallVersion;
}();
/**
 * @member {module:model/RelationshipWafFirewallVersionWafFirewallVersion} waf_firewall_versions
 */


RelationshipsForWafFirewallVersion.prototype['waf_firewall_versions'] = undefined;
/**
 * @member {module:model/RelationshipWafActiveRulesWafActiveRules} waf_active_rules
 */

RelationshipsForWafFirewallVersion.prototype['waf_active_rules'] = undefined; // Implement RelationshipWafFirewallVersions interface:

/**
 * @member {module:model/RelationshipWafFirewallVersionWafFirewallVersion} waf_firewall_versions
 */

_RelationshipWafFirewallVersions["default"].prototype['waf_firewall_versions'] = undefined; // Implement RelationshipWafActiveRules interface:

/**
 * @member {module:model/RelationshipWafActiveRulesWafActiveRules} waf_active_rules
 */

_RelationshipWafActiveRules["default"].prototype['waf_active_rules'] = undefined;
var _default = RelationshipsForWafFirewallVersion;
exports["default"] = _default;