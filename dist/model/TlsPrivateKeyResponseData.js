"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TypeTlsPrivateKey = _interopRequireDefault(require("./TypeTlsPrivateKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsPrivateKeyResponseData model module.
 * @module model/TlsPrivateKeyResponseData
 * @version 3.0.0-alpha1
 */
var TlsPrivateKeyResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsPrivateKeyResponseData</code>.
   * @alias module:model/TlsPrivateKeyResponseData
   */
  function TlsPrivateKeyResponseData() {
    _classCallCheck(this, TlsPrivateKeyResponseData);

    TlsPrivateKeyResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsPrivateKeyResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsPrivateKeyResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeyResponseData} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeyResponseData} The populated <code>TlsPrivateKeyResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsPrivateKeyResponseData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _Timestamps["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeTlsPrivateKey["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return TlsPrivateKeyResponseData;
}();
/**
 * @member {module:model/Timestamps} attributes
 */


TlsPrivateKeyResponseData.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a private Key.
 * @member {String} id
 */

TlsPrivateKeyResponseData.prototype['id'] = undefined;
/**
 * @member {module:model/TypeTlsPrivateKey} type
 */

TlsPrivateKeyResponseData.prototype['type'] = undefined;
var _default = TlsPrivateKeyResponseData;
exports["default"] = _default;