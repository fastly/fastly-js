"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafFirewallVersions = _interopRequireDefault(require("./RelationshipWafFirewallVersions"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallResponseDataAllOf model module.
 * @module model/WafFirewallResponseDataAllOf
 * @version 3.0.0-alpha1
 */
var WafFirewallResponseDataAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallResponseDataAllOf</code>.
   * @alias module:model/WafFirewallResponseDataAllOf
   */
  function WafFirewallResponseDataAllOf() {
    _classCallCheck(this, WafFirewallResponseDataAllOf);

    WafFirewallResponseDataAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallResponseDataAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/WafFirewallResponseDataAllOf} The populated <code>WafFirewallResponseDataAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallResponseDataAllOf();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipWafFirewallVersions["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallResponseDataAllOf;
}();
/**
 * @member {module:model/Timestamps} attributes
 */


WafFirewallResponseDataAllOf.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a WAF Firewall.
 * @member {String} id
 */

WafFirewallResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/RelationshipWafFirewallVersions} relationships
 */

WafFirewallResponseDataAllOf.prototype['relationships'] = undefined;
var _default = WafFirewallResponseDataAllOf;
exports["default"] = _default;