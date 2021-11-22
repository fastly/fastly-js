"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForWafFirewallVersion = _interopRequireDefault(require("./RelationshipsForWafFirewallVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TypeWafFirewallVersion = _interopRequireDefault(require("./TypeWafFirewallVersion"));

var _WafFirewallVersionData = _interopRequireDefault(require("./WafFirewallVersionData"));

var _WafFirewallVersionResponseDataAllOf = _interopRequireDefault(require("./WafFirewallVersionResponseDataAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallVersionResponseData model module.
 * @module model/WafFirewallVersionResponseData
 * @version 3.0.0-alpha1
 */
var WafFirewallVersionResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallVersionResponseData</code>.
   * @alias module:model/WafFirewallVersionResponseData
   * @implements module:model/WafFirewallVersionData
   * @implements module:model/WafFirewallVersionResponseDataAllOf
   */
  function WafFirewallVersionResponseData() {
    _classCallCheck(this, WafFirewallVersionResponseData);

    _WafFirewallVersionData["default"].initialize(this);

    _WafFirewallVersionResponseDataAllOf["default"].initialize(this);

    WafFirewallVersionResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallVersionResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallVersionResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionResponseData} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionResponseData} The populated <code>WafFirewallVersionResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallVersionResponseData();

        _WafFirewallVersionData["default"].constructFromObject(data, obj);

        _WafFirewallVersionResponseDataAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafFirewallVersion["default"].constructFromObject(data['type']);
        }

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

  return WafFirewallVersionResponseData;
}();
/**
 * @member {module:model/TypeWafFirewallVersion} type
 */


WafFirewallVersionResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

WafFirewallVersionResponseData.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a Firewall version.
 * @member {String} id
 */

WafFirewallVersionResponseData.prototype['id'] = undefined;
/**
 * @member {module:model/RelationshipsForWafFirewallVersion} relationships
 */

WafFirewallVersionResponseData.prototype['relationships'] = undefined; // Implement WafFirewallVersionData interface:

/**
 * @member {module:model/TypeWafFirewallVersion} type
 */

_WafFirewallVersionData["default"].prototype['type'] = undefined;
/**
 * @member {module:model/WafFirewallVersionDataAttributes} attributes
 */

_WafFirewallVersionData["default"].prototype['attributes'] = undefined; // Implement WafFirewallVersionResponseDataAllOf interface:

/**
 * Alphanumeric string identifying a Firewall version.
 * @member {String} id
 */

_WafFirewallVersionResponseDataAllOf["default"].prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

_WafFirewallVersionResponseDataAllOf["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForWafFirewallVersion} relationships
 */

_WafFirewallVersionResponseDataAllOf["default"].prototype['relationships'] = undefined;
var _default = WafFirewallVersionResponseData;
exports["default"] = _default;