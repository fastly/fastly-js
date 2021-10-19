"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafFirewallWafFirewall = _interopRequireDefault(require("./RelationshipWafFirewallWafFirewall"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipWafFirewall model module.
 * @module model/RelationshipWafFirewall
 * @version 3.0.0-alpha1
 */
var RelationshipWafFirewall = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipWafFirewall</code>.
   * @alias module:model/RelationshipWafFirewall
   */
  function RelationshipWafFirewall() {
    _classCallCheck(this, RelationshipWafFirewall);

    RelationshipWafFirewall.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipWafFirewall, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipWafFirewall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipWafFirewall} obj Optional instance to populate.
     * @return {module:model/RelationshipWafFirewall} The populated <code>RelationshipWafFirewall</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipWafFirewall();

        if (data.hasOwnProperty('waf_firewall')) {
          obj['waf_firewall'] = _RelationshipWafFirewallWafFirewall["default"].constructFromObject(data['waf_firewall']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipWafFirewall;
}();
/**
 * @member {module:model/RelationshipWafFirewallWafFirewall} waf_firewall
 */


RelationshipWafFirewall.prototype['waf_firewall'] = undefined;
var _default = RelationshipWafFirewall;
exports["default"] = _default;