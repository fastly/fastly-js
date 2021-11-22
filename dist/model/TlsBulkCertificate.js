"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsBulkCertificateData = _interopRequireDefault(require("./TlsBulkCertificateData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsBulkCertificate model module.
 * @module model/TlsBulkCertificate
 * @version 3.0.0-alpha1
 */
var TlsBulkCertificate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsBulkCertificate</code>.
   * @alias module:model/TlsBulkCertificate
   */
  function TlsBulkCertificate() {
    _classCallCheck(this, TlsBulkCertificate);

    TlsBulkCertificate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsBulkCertificate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsBulkCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificate} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificate} The populated <code>TlsBulkCertificate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsBulkCertificate();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _TlsBulkCertificateData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return TlsBulkCertificate;
}();
/**
 * @member {module:model/TlsBulkCertificateData} data
 */


TlsBulkCertificate.prototype['data'] = undefined;
var _default = TlsBulkCertificate;
exports["default"] = _default;