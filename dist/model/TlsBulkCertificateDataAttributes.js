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
 * The TlsBulkCertificateDataAttributes model module.
 * @module model/TlsBulkCertificateDataAttributes
 * @version 3.0.0-alpha1
 */
var TlsBulkCertificateDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsBulkCertificateDataAttributes</code>.
   * @alias module:model/TlsBulkCertificateDataAttributes
   */
  function TlsBulkCertificateDataAttributes() {
    _classCallCheck(this, TlsBulkCertificateDataAttributes);

    TlsBulkCertificateDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsBulkCertificateDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsBulkCertificateDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificateDataAttributes} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificateDataAttributes} The populated <code>TlsBulkCertificateDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsBulkCertificateDataAttributes();

        if (data.hasOwnProperty('allow_untrusted_root')) {
          obj['allow_untrusted_root'] = _ApiClient["default"].convertToType(data['allow_untrusted_root'], 'Boolean');
        }

        if (data.hasOwnProperty('cert_blob')) {
          obj['cert_blob'] = _ApiClient["default"].convertToType(data['cert_blob'], 'String');
        }

        if (data.hasOwnProperty('intermediates_blob')) {
          obj['intermediates_blob'] = _ApiClient["default"].convertToType(data['intermediates_blob'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsBulkCertificateDataAttributes;
}();
/**
 * Allow certificates that chain to untrusted roots.
 * @member {Boolean} allow_untrusted_root
 * @default false
 */


TlsBulkCertificateDataAttributes.prototype['allow_untrusted_root'] = false;
/**
 * The PEM-formatted certificate blob. Required.
 * @member {String} cert_blob
 */

TlsBulkCertificateDataAttributes.prototype['cert_blob'] = undefined;
/**
 * The PEM-formatted chain of intermediate blobs. Required.
 * @member {String} intermediates_blob
 */

TlsBulkCertificateDataAttributes.prototype['intermediates_blob'] = undefined;
var _default = TlsBulkCertificateDataAttributes;
exports["default"] = _default;