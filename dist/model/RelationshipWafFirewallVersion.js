"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafFirewallVersionWafFirewallVersion = _interopRequireDefault(require("./RelationshipWafFirewallVersionWafFirewallVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipWafFirewallVersion model module.
 * @module model/RelationshipWafFirewallVersion
 * @version 3.0.0-alpha1
 */
var RelationshipWafFirewallVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipWafFirewallVersion</code>.
   * @alias module:model/RelationshipWafFirewallVersion
   */
  function RelationshipWafFirewallVersion() {
    _classCallCheck(this, RelationshipWafFirewallVersion);

    RelationshipWafFirewallVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipWafFirewallVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipWafFirewallVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipWafFirewallVersion} obj Optional instance to populate.
     * @return {module:model/RelationshipWafFirewallVersion} The populated <code>RelationshipWafFirewallVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipWafFirewallVersion();

        if (data.hasOwnProperty('waf_firewall_version')) {
          obj['waf_firewall_version'] = _RelationshipWafFirewallVersionWafFirewallVersion["default"].constructFromObject(data['waf_firewall_version']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipWafFirewallVersion;
}();
/**
 * @member {module:model/RelationshipWafFirewallVersionWafFirewallVersion} waf_firewall_version
 */


RelationshipWafFirewallVersion.prototype['waf_firewall_version'] = undefined;
var _default = RelationshipWafFirewallVersion;
exports["default"] = _default;