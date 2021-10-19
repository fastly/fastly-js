"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsPrivateKeyResponseData = _interopRequireDefault(require("./TlsPrivateKeyResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsPrivateKeyResponse model module.
 * @module model/TlsPrivateKeyResponse
 * @version 3.0.0-alpha1
 */
var TlsPrivateKeyResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsPrivateKeyResponse</code>.
   * @alias module:model/TlsPrivateKeyResponse
   */
  function TlsPrivateKeyResponse() {
    _classCallCheck(this, TlsPrivateKeyResponse);

    TlsPrivateKeyResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsPrivateKeyResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsPrivateKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeyResponse} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeyResponse} The populated <code>TlsPrivateKeyResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsPrivateKeyResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _TlsPrivateKeyResponseData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return TlsPrivateKeyResponse;
}();
/**
 * @member {module:model/TlsPrivateKeyResponseData} data
 */


TlsPrivateKeyResponse.prototype['data'] = undefined;
var _default = TlsPrivateKeyResponse;
exports["default"] = _default;