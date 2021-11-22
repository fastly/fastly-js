"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsBulkCertificateTlsBulkCertificate = _interopRequireDefault(require("./RelationshipTlsBulkCertificateTlsBulkCertificate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsBulkCertificate model module.
 * @module model/RelationshipTlsBulkCertificate
 * @version 3.0.0-alpha1
 */
var RelationshipTlsBulkCertificate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsBulkCertificate</code>.
   * @alias module:model/RelationshipTlsBulkCertificate
   */
  function RelationshipTlsBulkCertificate() {
    _classCallCheck(this, RelationshipTlsBulkCertificate);

    RelationshipTlsBulkCertificate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsBulkCertificate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsBulkCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsBulkCertificate} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsBulkCertificate} The populated <code>RelationshipTlsBulkCertificate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsBulkCertificate();

        if (data.hasOwnProperty('tls_bulk_certificate')) {
          obj['tls_bulk_certificate'] = _RelationshipTlsBulkCertificateTlsBulkCertificate["default"].constructFromObject(data['tls_bulk_certificate']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsBulkCertificate;
}();
/**
 * @member {module:model/RelationshipTlsBulkCertificateTlsBulkCertificate} tls_bulk_certificate
 */


RelationshipTlsBulkCertificate.prototype['tls_bulk_certificate'] = undefined;
var _default = RelationshipTlsBulkCertificate;
exports["default"] = _default;