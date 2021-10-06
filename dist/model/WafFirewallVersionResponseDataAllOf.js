"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForWafFirewallVersion = _interopRequireDefault(require("./RelationshipsForWafFirewallVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallVersionResponseDataAllOf model module.
 * @module model/WafFirewallVersionResponseDataAllOf
 * @version 3.0.0-alpha1
 */
var WafFirewallVersionResponseDataAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallVersionResponseDataAllOf</code>.
   * @alias module:model/WafFirewallVersionResponseDataAllOf
   */
  function WafFirewallVersionResponseDataAllOf() {
    _classCallCheck(this, WafFirewallVersionResponseDataAllOf);

    WafFirewallVersionResponseDataAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallVersionResponseDataAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallVersionResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionResponseDataAllOf} The populated <code>WafFirewallVersionResponseDataAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallVersionResponseDataAllOf();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForWafFirewallVersion["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallVersionResponseDataAllOf;
}();
/**
 * @member {module:model/Timestamps} attributes
 */


WafFirewallVersionResponseDataAllOf.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a Firewall version.
 * @member {String} id
 */

WafFirewallVersionResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/RelationshipsForWafFirewallVersion} relationships
 */

WafFirewallVersionResponseDataAllOf.prototype['relationships'] = undefined;
var _default = WafFirewallVersionResponseDataAllOf;
exports["default"] = _default;