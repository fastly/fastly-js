"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsCertificateData = _interopRequireDefault(require("./TlsCertificateData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsCertificateResponse model module.
 * @module model/TlsCertificateResponse
 * @version 3.0.0-alpha1
 */
var TlsCertificateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsCertificateResponse</code>.
   * @alias module:model/TlsCertificateResponse
   */
  function TlsCertificateResponse() {
    _classCallCheck(this, TlsCertificateResponse);

    TlsCertificateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsCertificateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsCertificateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCertificateResponse} obj Optional instance to populate.
     * @return {module:model/TlsCertificateResponse} The populated <code>TlsCertificateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsCertificateResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _TlsCertificateData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return TlsCertificateResponse;
}();
/**
 * @member {module:model/TlsCertificateData} data
 */


TlsCertificateResponse.prototype['data'] = undefined;
var _default = TlsCertificateResponse;
exports["default"] = _default;