"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipTlsCertificateTlsCertificate = _interopRequireDefault(require("./RelationshipTlsCertificateTlsCertificate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RelationshipTlsCertificates model module.
 * @module model/RelationshipTlsCertificates
 * @version 3.0.0-alpha1
 */
var RelationshipTlsCertificates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RelationshipTlsCertificates</code>.
   * @alias module:model/RelationshipTlsCertificates
   */
  function RelationshipTlsCertificates() {
    _classCallCheck(this, RelationshipTlsCertificates);

    RelationshipTlsCertificates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RelationshipTlsCertificates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RelationshipTlsCertificates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipTlsCertificates} obj Optional instance to populate.
     * @return {module:model/RelationshipTlsCertificates} The populated <code>RelationshipTlsCertificates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RelationshipTlsCertificates();

        if (data.hasOwnProperty('tls_certificates')) {
          obj['tls_certificates'] = _RelationshipTlsCertificateTlsCertificate["default"].constructFromObject(data['tls_certificates']);
        }
      }

      return obj;
    }
  }]);

  return RelationshipTlsCertificates;
}();
/**
 * @member {module:model/RelationshipTlsCertificateTlsCertificate} tls_certificates
 */


RelationshipTlsCertificates.prototype['tls_certificates'] = undefined;
var _default = RelationshipTlsCertificates;
exports["default"] = _default;