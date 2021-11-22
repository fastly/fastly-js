"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipsForTlsPrivateKey = _interopRequireDefault(require("./RelationshipsForTlsPrivateKey"));

var _TlsPrivateKeyDataAttributes = _interopRequireDefault(require("./TlsPrivateKeyDataAttributes"));

var _TypeTlsPrivateKey = _interopRequireDefault(require("./TypeTlsPrivateKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsPrivateKeyData model module.
 * @module model/TlsPrivateKeyData
 * @version 3.0.0-alpha1
 */
var TlsPrivateKeyData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsPrivateKeyData</code>.
   * @alias module:model/TlsPrivateKeyData
   */
  function TlsPrivateKeyData() {
    _classCallCheck(this, TlsPrivateKeyData);

    TlsPrivateKeyData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsPrivateKeyData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsPrivateKeyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeyData} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeyData} The populated <code>TlsPrivateKeyData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsPrivateKeyData();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsPrivateKey["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _TlsPrivateKeyDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipsForTlsPrivateKey["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return TlsPrivateKeyData;
}();
/**
 * @member {module:model/TypeTlsPrivateKey} type
 */


TlsPrivateKeyData.prototype['type'] = undefined;
/**
 * @member {module:model/TlsPrivateKeyDataAttributes} attributes
 */

TlsPrivateKeyData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipsForTlsPrivateKey} relationships
 */

TlsPrivateKeyData.prototype['relationships'] = undefined;
var _default = TlsPrivateKeyData;
exports["default"] = _default;