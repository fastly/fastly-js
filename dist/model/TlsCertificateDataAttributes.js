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
 * The TlsCertificateDataAttributes model module.
 * @module model/TlsCertificateDataAttributes
 * @version 3.0.0-alpha1
 */
var TlsCertificateDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsCertificateDataAttributes</code>.
   * @alias module:model/TlsCertificateDataAttributes
   */
  function TlsCertificateDataAttributes() {
    _classCallCheck(this, TlsCertificateDataAttributes);

    TlsCertificateDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsCertificateDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsCertificateDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCertificateDataAttributes} obj Optional instance to populate.
     * @return {module:model/TlsCertificateDataAttributes} The populated <code>TlsCertificateDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsCertificateDataAttributes();

        if (data.hasOwnProperty('cert_blob')) {
          obj['cert_blob'] = _ApiClient["default"].convertToType(data['cert_blob'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsCertificateDataAttributes;
}();
/**
 * The PEM-formatted certificate blob. Required.
 * @member {String} cert_blob
 */


TlsCertificateDataAttributes.prototype['cert_blob'] = undefined;
/**
 * A customizable name for your certificate. Defaults to the certificate's Common Name or first Subject Alternative Names (SAN) entry. Optional.
 * @member {String} name
 */

TlsCertificateDataAttributes.prototype['name'] = undefined;
var _default = TlsCertificateDataAttributes;
exports["default"] = _default;