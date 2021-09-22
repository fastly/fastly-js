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
 * The PublicIpList model module.
 * @module model/PublicIpList
 * @version 3.0.0-alpha1
 */
var PublicIpList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PublicIpList</code>.
   * @alias module:model/PublicIpList
   */
  function PublicIpList() {
    _classCallCheck(this, PublicIpList);

    PublicIpList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublicIpList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PublicIpList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicIpList} obj Optional instance to populate.
     * @return {module:model/PublicIpList} The populated <code>PublicIpList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublicIpList();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('ipv6_addresses')) {
          obj['ipv6_addresses'] = _ApiClient["default"].convertToType(data['ipv6_addresses'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PublicIpList;
}();
/**
 * Fastly's IPv4 ranges.
 * @member {Array.<String>} addresses
 */


PublicIpList.prototype['addresses'] = undefined;
/**
 * Fastly's IPv6 ranges.
 * @member {Array.<String>} ipv6_addresses
 */

PublicIpList.prototype['ipv6_addresses'] = undefined;
var _default = PublicIpList;
exports["default"] = _default;